import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Slidev({
      // ...
      addons: [
        'slidev-addon-announcement'
      ]
    })
  ],
})
