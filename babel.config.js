const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

const plugins = []
// 在build的时候会清除console
if (IS_PROD) {
  plugins.push('transform-remove-console')
}

// 按需加载antd
plugins.push([
  'import',
  {
    libraryName: 'ant-design-vue',
    libraryDirectory: 'es',
    style: true // `style: true` 会加载 less 文件
  }
])

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3
      }
    ]
  ],
  plugins
}
