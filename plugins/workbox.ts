import { Plugin } from '@nuxt/types'
import { Workbox } from 'workbox-window'

const workbox: Plugin = async () => {
  if (process.env.NODE_ENV !== 'production') {
    return
  }

  if ('serviceWorker' in navigator) {
    await navigator.serviceWorker.register('/sw.js')

    await navigator.serviceWorker.ready
    // const wb = new Workbox('/sw.js', { scope: '/' })

    // wb.register().then(() => console.log(navigator.serviceWorker.ready)).then(() => fetch('https://dog.ceo/api/breed/hound/list')).catch((err) => {
    //   const logElement = document.getElementById('log')
    //   if (logElement) {
    //     logElement.innerHTML = err
    //   }
    // })
  }
}

export default workbox
