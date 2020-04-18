const withOffline = require('next-offline')
const nextConfig = {
    workboxOpts: {
        runtimeCaching: [
            {
                urlPattern: /.*/,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'offlineCache',
                    expiration: {
                    maxEntries: 900
                    }
                }
            },
            {
                urlPattern: /img\/.*/,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'offlineCache',
                    expiration: {
                    maxEntries: 900
                    }
                }
            },
            {
                urlPattern: /svg\/.*/,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'offlineCache',
                    expiration: {
                    maxEntries: 900
                    }
                }
            },
            {
                urlPattern: /^https?.*/,
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'offlineCache',
                    expiration: {
                    maxEntries: 900
                    }
                }
            },
        ]
    }
}
module.exports = withOffline(nextConfig)