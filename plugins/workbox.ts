import { Plugin } from '@nuxt/types'
import { Workbox } from 'workbox-window'

const workbox: Plugin = () => {
  if (process.env.NODE_ENV !== 'production') {
    return
  }

  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/sw.js', { scope: '/' })
  }
}

export default workbox
