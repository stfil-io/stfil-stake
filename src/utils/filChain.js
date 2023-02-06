export const filChain = {
    id: 3141,
    name: 'Filecoin - Hyperspace',
    network: 'wallaby',
    nativeCurrency: {
        decimals: 18,
        name: 'TFIL',
        symbol: 'TFIL',
    },
    rpcUrls: {
        default: { http: ['https://api.hyperspace.node.glif.io/rpc/v1'] },
    },
    blockExplorers: {
        default: { name: 'SnowTrace', url: 'https://hyperspace.filfox.info/en' },
    },
}
