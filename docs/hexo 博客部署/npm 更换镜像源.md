---
title: npm 更换镜像源
sidebar_position: 2
---
打开终端，执行以下命令：

```
npm config set registry https://registry.npmmirror.com
```

```
npm config set registry http://mirrors.cloud.tencent.com/npm/
```

执行以下命令检查当前配置：
```
npm config get registry
```