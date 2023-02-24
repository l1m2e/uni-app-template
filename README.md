# uniapp + typescript + unocss template

## 项目说明

> uniapp + vue3 + typescript + unocss 基础模版

- 集成 [unocss](https://github.com/unocss/unocss) 作为 css 框架

- 集成 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) 自动导入 内置 api 以及请求

- 集成 [vite-plugin-vue-setup-extend](https://github.com/vbenjs/vite-plugin-vue-setup-extend)

- 集成 [unocss-preset-weapp](https://github.com/MellowCo/unocss-preset-weapp) 做类名转换

- 集成 [eslint](https://eslint.org) 与 [prettier](https://prettier.io) 做代码风格约束, 使用 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 作为基础配置，用户可根据需求自行修改

### 二、安装依赖

tips: 使用 vscode 开发时，安装项目推荐的插件能够有更好的开发体验

```sh
yarn
# or
pnpm install
```

### 三、启动项目

- 如：微信小程序，可以使用下面命令启动，其他平台可查看 package.json 中的 scripts

```sh
yarn dev
# or
pnpm dev
```
