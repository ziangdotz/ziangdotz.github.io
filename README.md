# ziangdotz.github.io

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Online-2ea44f?logo=github)](https://ziangdotz.github.io)
[![Status](https://img.shields.io/badge/status-initializing-yellow)](https://github.com/ziangdotz/ziangdotz.github.io)
[![Made with HTML](https://img.shields.io/badge/made%20with-HTML%20%2F%20CSS%20%2F%20JS-e34f26?logo=html5&logoColor=white)](https://developer.mozilla.org)

> 个人主页与技术博客，基于 **GitHub Pages** 托管的静态站点。

🔗 在线访问：<https://ziangdotz.github.io>

---

## ✨ 简介

这里是 `ziangdotz` 的 GitHub Pages 用户站点仓库，用于展示个人介绍、项目作品与技术文章。
仓库名为 `ziangdotz.github.io`，因此站点根路径直接对应域名 `https://ziangdotz.github.io`。

## 🗂️ 目录结构

```text
.
├── index.html        # 站点入口页面
├── assets/           # 静态资源（样式、脚本、图片）
│   ├── css/
│   ├── js/
│   └── img/
├── posts/            # 博客文章（可选）
└── README.md         # 仓库说明（本文件）
```

> 当前仓库处于初始化阶段，仅包含说明文档，页面与资源文件将逐步补充。

## 🚀 本地预览

克隆仓库：

```bash
git clone git@github.com:ziangdotz/ziangdotz.github.io.git
cd ziangdotz.github.io
```

启动本地静态服务器（任选其一）：

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .
```

浏览器打开 <http://localhost:8000> 即可预览。

## 📦 部署

站点通过 GitHub Pages 自动发布：

1. 将改动提交并推送到 `main` 分支；
2. 打开仓库 **Settings → Pages**；
3. 在 **Source** 中选择 `Deploy from a branch`，分支选 `main`，目录选 `/ (root)`；
4. 保存后等待构建完成，访问 <https://ziangdotz.github.io> 查看效果。

```bash
git add .
git commit -m "docs: update README"
git push origin main
```

## 🧰 技术栈

- HTML5 / CSS3 / 原生 JavaScript
- GitHub Pages（静态托管）
- Markdown（内容编写）

## 📬 联系

- GitHub：[@ziangdotz](https://github.com/ziangdotz)
- 站点：<https://ziangdotz.github.io>
