import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const AutoImport = require('unplugin-auto-import/vite')
const Components = require('unplugin-vue-components/vite')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const Icons = require('unplugin-icons/vite')
const IconsResolver = require('unplugin-icons/resolver')
const path = require('path')
const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 目标文件
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, // .vue
        /\.md$/ // .md
      ],
      // 全局注册导入，详情看 auto-imports.d.ts 文件
      imports: [
        'vue',
        'pinia',
        'vue-router',
        {
          axios: [
            // 默认导入 import { default as axios } from 'axios'
            ['default', 'axios']
          ]
        }
      ],
      // 声明文件生成位置和文件名称
      dts: 'src/auto-imports.d.ts',
      // 解析器来进行组件声明
      resolvers: [
        // Element Plus 组件相关函数(带样式)
        ElementPlusResolver(),
        // 图标组件
        IconsResolver({
          prefix: 'Icon'
        })
      ],
      // eslint报错解决
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    Components({
      // 自定义组件的解析器
      resolvers: [
        // Element Plus 组件
        ElementPlusResolver(),
        // 图标库组件
        IconsResolver({
          enabledCollections: ['ep']
        })
      ],
      // 声明文件生成位置和文件名称
      dts: path.resolve(pathSrc, 'components.d.ts')
    })
    // Icons({
    //   autoInstall: true,
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
