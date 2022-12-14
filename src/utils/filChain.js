export const filChain = {
    id: 31415,
    name: 'Filecoin - Wallaby',
    network: 'wallaby',
    nativeCurrency: {
        decimals: 18,
        name: 'tFIL',
        symbol: 'tFIL',
    },
    rpcUrls: {
        default: { http: ['https://wallaby.node.glif.io/rpc/v0'] },
    },
    blockExplorers: {
        default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
    },
}
