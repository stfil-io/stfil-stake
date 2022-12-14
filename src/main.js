import {createApp} from 'vue'
import {configureChains, createClient, VagmiPlugin} from 'vagmi';
import { jsonRpcProvider } from 'vagmi/providers/jsonRpc'
import {filChain} from '@/utils/filChain'
import {InjectedConnector} from 'vagmi/connectors/injected';
import '@/assets/scss/style.scss'
import router from './router'
import store from './store'
import App from './App.vue'

const {provider, webSocketProvider} = configureChains(
    [filChain],
    [jsonRpcProvider({
        rpc: () => ({
            http: `https://wallaby.node.glif.io/rpc/v0`,
        }),
    }),],
);

const client = createClient({
    autoConnect: true,
    connectors: [
        new InjectedConnector({
            chains: [filChain],
            options: {
                name: 'Injected',
                shimDisconnect: true,
            }
        })
    ],
    provider,
    webSocketProvider,
});

const plugin = VagmiPlugin(client);
const app = createApp(App);
app.use(store)
app.use(router)
app.use(plugin)
app.mount('#app')
