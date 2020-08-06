##更 新 canouse-lite
``` shell
yarn upgrade caniuse-lite browserslist
```re

## 更新依赖包
``` shell
yarn upgrade-interactive --latest
```
## git commit
``` shell
sudo npm install -g commitizen
commitizen init cz-conventional-changelog --save-dev --save-exact
```
- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- perf: 代码更改可提高性能
- test：增加测试
- build：影响构建系统或外部依赖项的更改（示例范围：gulp, broccoli, npm）
- ci：对我们的CI配置文件和脚本的更改（示例范围：Travis，Circle，BrowserStack，SauceLabs）
- chore：构建过程或辅助工具的变动
- revert:  还原先前的提交

## 撤销commit
``` shell
git reset --soft HEAD^
```