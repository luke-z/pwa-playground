import { Plugin } from '@nuxt/types'
import { Workbox } from 'workbox-window'

const workbox: Plugin = () => {
  if (process.env.NODE_ENV !== 'production') {
    return
  }

  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/sw.js', { scope: '/' })

    wb.register().catch((err) => {
      document.getElementById('log')?.innerHTML = err
    })
  }
}

export default workbox
