# git 

## 基础

### git init

> 初始化项目

```bash
git init
```

### git config

> 配置用户信息

```bash
git config --global user.email ''
git config --global user.name ''
```

### git status

> 查看文件状态

```bash
git status // 完整状态
git status -s // 简写状态
```

### git add

> 追踪文件, 并放置在暂存区.
>
> -A 追踪所有

```bash
git add 文件名
git add -A
```

### git commit

> 提交至仓库区, 只有 commit 后, 才算是真真的提交

```bash
git commit -m 'message'
git commit -a -m 'message' // add=>commit
```

### git log

> 查看日志

```bash
git log // 完整日志
git log --oneline  //  单行日志
```

### git reset —hard

> 重置

```bash
git reset --hard 版本号
```

### git checkout

> 从暂存区恢复至上一次的版本

```bash
git checkout 文件名
```

## 分支

### git branch

> 创建分支, 不加分支名则查看所有分支.
>
> -d 删除分支

```bash
git branch 分支名
git branch -d 分支名 // 删除目标分支
```

### git checkout 分支名|master

> 切换分支, 若要切换回主分支, 则加 **master**

```bash
git checkout -b 分支名 // 创建并进入该分支
git checkout master // 切换回主分支
```

### git merge

> 合并分支, 必须先切换到 **master** 分支

```bash
git merge 分支名
```

## 远程仓库

### git push

> 上传仓库

```bash
git push 地址 master
```

### git clone

> 克隆仓库

```bash
git clone 地址 指定的文件夹名
```

### git pull

> 下载仓库

```bash
git pull 地址 分支|master
```

### git remote

> 给仓库设置别名

```bash
git remote add 仓库名 仓库地址
```

#bash

tab键: 自动补全文件名

##基础

### cd

> change directory

改变当前文件夹路径

| 命令      | 描述      | 备注   |
| ------- | ------- | ---- |
| cd 文件夹名 | 进入目标文件夹 |      |
| cd ..   | 进入上层目录  |      |
| cd ~    | 进入根目录   |      |

### pwd

> print work directory

打印当前目录

### ls

> list

展示当前目录下的所有文件

### clear

清空窗口, 保留历史记录

### reset

清空窗口, 并且清空历史记录

### mkdir

> make directory

创建一个空文件夹

```bash
mkdir 文件夹名
```

### rmdir

> remove directory

删除空文件夹

```bash
rmdir 文件夹名
```

### touch

创建文件

```bash
touch 文件名.后缀
touch 文件夹名/文件名.后缀
```

### rm

删除文件

> 用法同touch

下面的例子: 删除文件夹以及其中的所有的文件, **-rf** 强制删除, 一般不用

```bash
rm -r 文件夹名 
rm -rf 文件夹名  
```

### mv

移动文件(剪切/重命名)

```bash
mv 文件名.后缀 目标文件夹/
mv 文件名.后缀 新文件名.后缀
```

### cp

复制

```bash
cp 文件名.后缀 目标文件夹
```

### 其他

| 名称   | 描述     | 备注   |
| ---- | ------ | ---- |
| cat  | 查看文件内容 |      |

## less

### 编译

```bash
lessc target.less target.css
```

## Node.js

### 进入编辑模式

```bash
node #code || 文件名(直接运行)
```

### 退出编辑模式

```bash
.exit
```

### n - Node.js 版本切换工具

```bash
n 5.4.1   ＝＝》（安装node.js 5.4.1版本）
n latest  ＝＝》（安装node.js最新版本）
n stable    ＝＝》（安装node.js稳定版本）
n rm 4.0.0   ＝＝》（删除某个版本）
n use 4.0.0  some.js      ＝＝》（以指定的版本来执行脚本）
```

###npm

```bash
npm help 查看npm帮助
npm find 查找组件
npm install 安装组件
npm remove 删除组件
```

###Homebrew

