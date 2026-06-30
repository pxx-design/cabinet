<div align="center">

# Cabinet · 灵感库

**把说不清的感觉，翻译成 AI 能造出来的东西。**

[English](./README.md) · MIT · 纯浏览器运行，无后端

</div>

---

你看到一个设计，感觉到*某种东西*——安静、高级、有生命——可一旦让 AI
"做出那种感觉"，话说出来是模糊的，结果回来是平庸的。差的不是模型，是那份
**感觉从没被拆成可迁移的手法**。

Cabinet 就做这件事：把一张参考拆成 **facet（手法）**——有命名、能复用的最小
单元——并带着"借鉴边界"交给你的 coding agent 当精确指令，让你迁移技法，而
不是照搬画面。

## 临摹，是为了离帖

借鉴从来不是把原作复刻一遍，而是向它学习。美术和中国书法的启蒙都是
「临摹」——但临摹的目的从不是那张摹本，而是把一个东西「为什么成立」吃进
去，直到能离帖，画出自己的画，写出自己的字。

到了 AI 时代，临摹不再只是手眼的训练。真正值得练的，是**观察与表达**——
*我喜欢的到底是哪一部分？是什么营造了这种感觉？换作我自己的作品，会怎样把
它表达出来？*

Cabinet 正是为这件事做的。它不给你整图 prompt，而是在使用中去学习作者使用了
什么手法、以及它为什么起作用，再尝试把**技法**迁移过来。在学中用，在用中
学，而不是做一个别人成品的复制件。

## 模型：感觉 ← 手法 ← 参考

- **参考（plate）**——你收集的一张截图或图像。
- **手法（facet）**——参考上的一个具体技法：*柔彩渐变*、*邮政拟物道具*、
  *照片打底 UI*。命名到 AI 认得，收口到能迁移进你的产品。
- **感觉**——涌现出来的。一张参考之所以"有那种感觉"，是它叠的那些手法共同
  达成的。感觉词长在手法上，不在图上。

## 三层架构

```
浏览器（输入/可视）          磁盘（桥）            对话（模型能力）
丢一张参考           →       _inbox/         →   /ingest：拆成手法
在感觉地图上逛、
看锚点解析
跨参考混选手法       →       _desk.json      →   /translate：你的 agent 读已选手法 +
                                                它本就知道你在做什么 → 出转译稿，
                                                你确认后直接做进产品
```

浏览器是操作界面，磁盘是桥，**和 coding agent 的对话才是模型能力真正发生的
地方。** Cabinet 不在页面里生成转译稿——你的 agent 知道你的产品语境，质量高一
个量级。

## 上手

Cabinet 是**一个带可视前端的 Claude Code 项目**——浏览器页面用来「看」，你的
coding agent 才是「干活」的地方。

**装一次：**

```bash
git clone https://github.com/pxx-design/cabinet
cd cabinet
./setup/install.sh        # /translate + 转译 裸词 + (macOS) 自动入库 watcher
```

`install.sh` 第一次会替你打开 app。**以后再开，直接双击 `index.html`**——现代 Chrome
下就是全功能。若浏览器在 `file://` 下拦了文件夹授权，改用 `./start.sh`（localhost）。

**唯一要你手动的一步**（浏览器安全，谁都自动不了）：第一次照页面左下的提示（那颗脉冲
红点）——点「连接」→ 选这个 `cabinet` 文件夹 →「允许」。这一步让页面能写盘。只此一次。

**日常：**
- **加参考** —— 粘图（`⌘V`）→ 点「入库」。macOS 上 watcher 自动拆；其他系统在
  Claude Code 里敲 `/ingest`。
- **用收的手法** —— 在任何项目里敲 **`/translate`**（或直接打 **`转译`**），agent 就把
  你收的手法用进去，每条都守住借鉴边界。

<details>
<summary>想让 Claude Code 替你装？粘这段：</summary>

```text
帮我装好 Cabinet：git clone https://github.com/pxx-design/cabinet && cd cabinet，
运行 ./setup/install.sh，并在浏览器打开 index.html。然后告诉我点左下「连接」选 cabinet
文件夹。我每次把参考粘进页面、点「入库」，你就运行 /ingest。
```

</details>

## 两个流程

- **`/ingest`（入库）**— 把参考粘进页面（或丢进 `_inbox/`），agent 读
  [`INGEST.md`](./INGEST.md) 把每张图拆成手法：`zh/en` 命名、图上锚点、感觉
  词、为什么起作用、怎么对 AI 说、借鉴边界。规范是 agent 中立的——Claude
  Code 用 `/ingest` 命令，其他 agent 直接读 `INGEST.md`（见
  [`AGENTS.md`](./AGENTS.md)）。
- **`/translate`（转译）**— 在*任何*项目里，agent 读你选好的手法
  （`_desk.json`），结合你正在做的产品，先出转译稿再动代码。

**防照搬是结构性的**：手法只带 `say`（说法），不带整图 prompt；`tune` 边界
随手法走；配色不自动带过来。

## 目录

```
index.html        主程序（感觉地图 + 抽屉 + 召唤 + 入库托盘 + 磁盘桥）
data-v3.js        数据源 —— 6 张精选种子（字段说明见文件头）
assets/ thumbs/   种子参考图（低清）+ 缩略图
folio/ shots/     「找灵感」目录 —— 指向各设计站的缩略图
_inbox/           待入库的参考丢这里
INGEST.md         agent 中立的入库规范
start.sh          localhost 兜底（浏览器在 file:// 下拦连接时用）
setup/            install.sh —— 安装 /translate、转译 hook、(macOS) 自动 watcher
```

这是 **6 张种子**，让首次打开不空。重点是用*你自己的*参考把它填满。打包图片
的版权说明见 [NOTICE.md](./NOTICE.md)。

## 环境

- **Claude Code**（或任何能读 `INGEST.md` 的 agent）—— 入库和转译的活儿靠它干，
  浏览之外的一切都需要它。
- **Chromium 内核浏览器** 跑前端。磁盘桥用 File System Access API——现代 Chrome
  下双击 `file://` 页面就能用；被拦的话用 `./start.sh` 走 `localhost`。
- **`python3`**（`start.sh` 靠它）+ **Pillow**（入库时量图）；Node 用来校验
  `data-v3.js` 语法。
- *macOS*：`./setup/install.sh` 还会装一个 launchd watcher，点「入库」即自动处理
  （加 `--no-watcher` 跳过）；其他系统用 `/ingest` 触发。
- *其他 agent（Codex 等）*：app、`INGEST.md`、`AGENTS.md` 都是 agent 中立的，入库/转译
  靠它们就能跑；`/ingest`、`/translate`、`转译` 快捷触发和自动 watcher 暂时只支持 Claude Code。

## 许可

代码 + 手法文本：[MIT](./LICENSE)。打包的参考图：见 [NOTICE.md](./NOTICE.md)
（低清、学习/评注用途、接受 takedown）。
