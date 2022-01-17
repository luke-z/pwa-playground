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

const hash = Date.now().toString()

const customRoutes = [
  { url: '/', revision: hash },
  { url: '/test', revision: hash },
  { url: '/test/deep', revision: hash },
  { url: '/manifest.json', revision: Date.now().toString() },
  { url: '/favicon.ico', revision: Date.now().toString() },
]

manifest.push(...customRoutes)

setDefaultHandler(new NetworkFirst())

precacheAndRoute(manifest, {
  ignoreURLParametersMatching: [/.*/],
  directoryIndex: '/',
  urlManipulation: ({ url }) => {
    const manifestUrl = `${url.pathname}?__WB_REVISION__=${hash}`
    return [manifestUrl]
  }
})


registerRoute(new RegExp('/icons.*'), new CacheFirst(), 'GET')
registerRoute(new RegExp('/_nuxt/.*'), new CacheFirst(), 'GET')
registerRoute(new RegExp('/.*'), new NetworkFirst(), 'GET')
