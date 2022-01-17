/* eslint-disable prefer-regex-literals */

import { registerRoute, setDefaultHandler } from 'workbox-routing'
import { precacheAndRoute } from 'workbox-precaching'
import { clientsClaim, setCacheNameDetails } from 'workbox-core'
import { CacheFirst, NetworkFirst } from 'workbox-strategies'

const { skipWaiting } = self

clientsClaim()
skipWaiting()

setCacheNameDetails({
  prefix: 'test',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'runtime',
  googleAnalytics: 'ga',
})

const manifest = self.__WB_MANIFEST
const customRoutes = [
  { url: '/?standalone=true', revision: Date.now().toString() },
  // { url: '/test', revision: Date.now().toString() },
  { url: '/test/', revision: Date.now().toString() },
  { url: '/manifest.json', revision: Date.now().toString() },
  { url: '/favicon.ico', revision: Date.now().toString() },
]

manifest.push(...customRoutes)

// navigator.connection.onchange = () => {
//   if (navigator.onLine) {
//     isOnline = true
//   } else {
//     isOnline = false
//   }

//   registerRoutes()
// }

// self.__WB_DISABLE_DEV_LOGS = true

setDefaultHandler(new NetworkFirst())

precacheAndRoute(manifest, {
  ignoreURLParametersMatching: [/.*/],
  directoryIndex: '/',
  cleanUrls: false
})

const registerRoutes = () => {
  const routes = [
    {
      url: '/icons.*',
    },
  ]

  routes.forEach((route) => {
    const { url, plugins } = route
    const strategy = new CacheFirst({ plugins })
    registerRoute(new RegExp(url), strategy)
  })

  // registerRoute(new RegExp('/_nuxt/.*'), new CacheFirst(), 'GET')
  // registerRoute(new RegExp('/.*'), new NetworkFirst(), 'GET')
}

registerRoutes()
