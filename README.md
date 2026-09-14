# JLPT 助手小程序

JLPT（日本语能力测试 N5–N1）刷题小程序，基于微信小程序 Skyline 渲染引擎。

## 功能

- 底部四个 Tab：**单词** / **填空** / **阅读** / **我的**
- 每个 Tab 列出 N5–N1 五个级别入口
- 每次练习从对应级别题库随机抽取 10 道选择题（题目与选项均随机打乱）
- 答题即时反馈 + 解析，完成后展示成绩
- 「我的」页统计练习次数、正确率、各级别最佳成绩与最近记录（本地存储）

## 目录结构

```
├── app.js / app.json / app.wxss   全局配置（含 tabBar）
├── components/
│   ├── navigation-bar/             自定义导航栏
│   └── level-list/                 N5–N1 级别列表组件（三个 Tab 复用）
├── data/                           题库（静态文件）
│   ├── index.js                    题库入口，按类别聚合
│   ├── vocab.js                    单词题库
│   ├── cloze.js                    填空题库
│   └── reading.js                  阅读题库
├── pages/
│   ├── vocab/                      单词 Tab
│   ├── cloze/                      填空 Tab
│   ├── reading/                    阅读 Tab
│   ├── profile/                    我的 Tab
│   └── quiz/                       答题页
└── utils/
    └── quiz.js                     洗牌、抽题、答题记录等工具
```

## 题库格式

`data/` 下每个文件导出按级别分组的对象，替换/补充题目只需保持以下格式：

```js
module.exports = {
  N5: [
    {
      id: 'n5-v-001',
      question: '题干（填空题用 ＿＿ 占位）',
      passage: '阅读材料（仅阅读题需要，可省略）',
      options: ['选项A', '选项B', '选项C', '选项D'],
      answer: 0,            // 正确选项下标（基于 options 原始顺序）
      explanation: '解析'   // 可选
    }
  ],
  N4: [],
  N3: [],
  N2: [],
  N1: []
}
```

- 题目数无上限；不足 10 题时，抽题会取全部
- 抽题时会自动打乱题目顺序与选项顺序，无需预处理
- 新增题库类别时，在 `data/index.js` 注册，并在 `utils/quiz.js` 的 `CATEGORY_NAMES` 中补充名称

## 说明

- 当前 `data/` 中为开发用草稿题，等待正式题库替换
- tabBar 暂为纯文字样式，可按需补充 `iconPath` / `selectedIconPath` 图标
