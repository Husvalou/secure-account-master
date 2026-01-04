import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Pour husvalou.github.io (repo principal). Si sous-repo, mettre '/nom-du-repo/'
})

