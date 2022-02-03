/* eslint-disable prefer-regex-literals */

import { registerRoute, setDefaultHandler } from 'workbox-routing'
import { precacheAndRoute } from 'workbox-precaching'
import { clientsClaim, setCacheNameDetails } from 'workbox-core'
import { CacheFirst, NetworkFirst } from 'workbox-strategies'

const { skipWaiting } = self

skipWaiting()
clientsClaim()


setCacheNameDetails({
  prefix: 'test',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'runtime',
  googleAnalytics: 'ga',
})

setDefaultHandler(new NetworkFirst())

precacheAndRoute(self.__WB_MANIFEST, {
  ignoreURLParametersMatching: [/.*/],
  directoryIndex: '/',
  urlManipulation: ({url}) => {
    if (url.pathname.in)
    console.log(url)
    console.log(url.href)
    console.log(url.href.substr(0, url.href.lastIndexOf('/') + 1))
    return [new URL(url.href.substr(0, url.href.lastIndexOf('/') + 1))]
  }
})

