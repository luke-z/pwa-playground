import { Plugin } from '@nuxt/types'

const meta: Plugin = ({ app }) => {
  mergeMeta(app.head, metaData)
}

export default meta

function mergeMeta(to: any, from: any) {
  for (const key in from) {
    const value = from[key]
    if (Array.isArray(value)) {
      to[key] = to[key] || []
      for (const item of value) {
        // Avoid duplicates
        if ((item.hid && hasMeta(to[key], 'hid', item.hid)) || (item.name && hasMeta(to[key], 'name', item.name))) {
          continue
        }
        // Add meta
        to[key].push(item)
      }
    } else if (typeof value === 'object') {
      to[key] = to[key] || {}
      for (const attr in value) {
        to[key][attr] = value[attr]
      }
    } else if (to[key] === undefined) {
      to[key] = value
    }
  }
}

function hasMeta(arr: Array<any>, key: string, val: any) {
  return arr.find((obj) => (val ? obj[key] === val : obj[key]))
}

const metaData = {
  title: 'Mangelverwaltung Migros Aare',
  meta: [
    {
      hid: 'charset',
      charset: 'utf-8',
    },
    {
      hid: 'viewport',
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimal-ui',
    },
    {
      hid: 'mobile-web-app-capable',
      name: 'mobile-web-app-capable',
      content: 'yes',
    },
    {
      hid: 'apple-mobile-web-app-capable',
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      hid: 'apple-mobile-web-app-status-bar-style',
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
    {
      hid: 'apple-mobile-web-app-title',
      name: 'apple-mobile-web-app-title',
      content: 'Mangelverwaltung Migros Aare',
    },
    {
      hid: 'author',
      name: 'author',
      content: 'Digital4You GmbH',
    },
    {
      hid: 'description',
      name: 'description',
      content: 'Die Mangelverwaltung der Migros Aare. Erfasse Baumängel schnell und einfach auch mit deinem mobilen Gerät.',
    },
    {
      hid: 'theme-color',
      name: 'theme-color',
      content: '#FF6600',
    },
    {
      hid: 'og:type',
      name: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:title',
      name: 'og:title',
      property: 'og:title',
      content: 'Mangelverwaltung Migros Aare',
    },
    {
      hid: 'og:site_name',
      name: 'og:site_name',
      property: 'og:site_name',
      content: 'Mangelverwaltung Migros Aare',
    },
    {
      hid: 'og:description',
      name: 'og:description',
      property: 'og:description',
      content: 'Die Mangelverwaltung der Migros Aare. Erfasse Baumängel schnell und einfach auch mit deinem mobilen Gerät.',
    },
  ],
  link: [
    {
      hid: 'shortcut-icon',
      rel: 'shortcut icon',
      href: '/icons/icon_64x64.png',
    },
    {
      hid: 'apple-touch-icon',
      rel: 'apple-touch-icon',
      href: '/icons/icon_512x512.png',
      sizes: '512x512',
    },
    {
      href: '/icons/splash_iphonese_640x1136.png',
      media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
      rel: 'apple-touch-startup-image',
      hid: 'apple-touch-startup-image-iphonese',
    },
    {
      href: '/icons/splash_iphone6_50x1334.png',
      media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)',
      rel: 'apple-touch-startup-image',
      hid: 'apple-touch-startup-image-iphone6',
    },
    {
      href: '/icons/splash_iphoneplus_1080x1920.png',
      media: '(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)',
      rel: 'apple-touch-startup-image',
      hid: 'apple-touch-startup-image-iphoneplus',
    },
    {
      href: '/icons/splash_iphonex_1125x2436.png',
      media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
      rel: 'apple-touch-startup-image',
      hid: 'apple-touch-startup-image-iphonex',
    },
    {
      href: '/icons/splash_iphonexr_828x1792.png',
      media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)',
      rel: 'apple-touch-startup-image',
      hid: 'apple-touch-startup-image-iphonexr',
    },
    {
      href: '/icons/splash_iphonexsmax_1242x2688.png',
      media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)',
      rel: 'apple-touch-startup-image',
      hid: 'apple-touch-startup-image-iphonexsmax',
    },
    {
      href: '/icons/splash_ipad_1536x2048.png',
      media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)',
      rel: 'apple-touch-startup-image',
      hid: 'apple-touch-startup-image-ipad',
    },
    {
      media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)',
      rel: 'apple-touch-startup-image',
      hid: 'apple-touch-startup-image-ipadpro1',
    },
    {
      media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)',
      rel: 'apple-touch-startup-image',
      hid: 'apple-touch-startup-image-ipadpro2',
    },
    {
      media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)',
      rel: 'apple-touch-startup-image',
      hid: 'apple-touch-startup-image-ipadpro3',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
      hid: 'manifest',
    },
  ],
  htmlAttrs: {
    lang: 'de-CH',
  },
}
