## 学习使用 deno

- 1、`deno(蒂诺)`为 js/ts 的运行环境类似于 node，是由 rust 利用 v8 引擎开发的。
- 2、deno 不需要 node 的 node_moudle，其依赖来源于网络或是本地的文件，依赖更加简单，类似于 python 的包。deno 的模块采用 es6 的模块方式进行管理。
- 3、deno 是安全的，默认没有读写、网络等权限，需要运行脚本时设置权限才可以进行文件读取与网络使用，运行脚本方式为`deno run --allow-net myServer.ts`，其中`--allow-net`即为网络权限
