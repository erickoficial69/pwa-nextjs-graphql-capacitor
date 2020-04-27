const withOffline = require('next-offline')
const nextConfig = {
    workboxOpts: {
        runtimeCaching: [
            /*start routes cache local app*/
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
                urlPattern: /webaps\/.*/,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'offlineCache',
                    expiration: {
                    maxEntries: 900
                    }
                }
            },
            {
                urlPattern: /movilapps\/.*/,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'offlineCache',
                    expiration: {
                    maxEntries: 900
                    }
                }
            },
            /*end routes cache local app*/
            /*start media cache local app*/
            {
                urlPattern: /css\/.*/,
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
            /*end media cache local app*/
            /*start external cache apis */
            {
                urlPattern: /^https?:\/\/localhost:3100\/.*/,
                handler: 'StaleWhileRevalidate',
                options: {
                    cacheName: 'offlineCache',
                    expiration: {
                    maxEntries: 900
                    }
                }
            },
            {
                urlPattern: /^https?:\/\/localhost:3100\/graphql/,
                handler: 'StaleWhileRevalidate',
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