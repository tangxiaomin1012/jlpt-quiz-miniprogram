/**
 * 填空题库（语法/词汇填空，草稿数据，可整体替换为正式题库）
 *
 * 题目格式：
 * {
 *   id: '唯一ID',
 *   question: '句中含有 ＿＿ 占位符',
 *   options: [...],
 *   answer: 0,          // 正确选项下标（基于 options 原始顺序）
 *   explanation: '解析' // 可选
 * }
 */
module.exports = {
  N5: [
    {
      id: 'n5-c-001',
      question: '私は毎日学校＿＿行きます。',
      options: ['に', 'が', 'を', 'で'],
      answer: 0,
      explanation: '行く表示移动方向时用「に／へ」'
    },
    {
      id: 'n5-c-002',
      question: 'つくえの＿＿にほんがあります。',
      options: ['うえ', 'した', 'なか', 'そと'],
      answer: 0,
      explanation: '机の上に本があります。'
    },
    {
      id: 'n5-c-003',
      question: '昨日は雨＿＿降りました。',
      options: ['が', 'を', 'に', 'で'],
      answer: 0,
      explanation: '降る是自动词，主语用「が」'
    },
    {
      id: 'n5-c-004',
      question: 'これは私＿＿本です。',
      options: ['の', 'を', 'に', 'で'],
      answer: 0,
      explanation: '「の」表示所属：我的书'
    }
  ],
  N4: [
    {
      id: 'n4-c-001',
      question: '傘を持って行ったほうが＿＿です。',
      options: ['いい', 'よかった', 'よくない', 'よさ'],
      answer: 0,
      explanation: '〜たほうがいい＝ 最好……'
    },
    {
      id: 'n4-c-002',
      question: '明日までに宿題を＿＿なければなりません。',
      options: ['し', 'して', 'した', 'しない'],
      answer: 0,
      explanation: '動詞辞書形＋なければならない＝ 必须'
    },
    {
      id: 'n4-c-003',
      question: '電気がついて＿＿。',
      options: ['います', 'あります', 'みます', 'おきます'],
      answer: 0,
      explanation: '「つく」是自动词，结果状态用「〜ている」'
    },
    {
      id: 'n4-c-004',
      question: '走って＿＿間に合いませんでした。',
      options: ['いっても', 'いくと', 'いっては', 'いったら'],
      answer: 0,
      explanation: '〜ても＝ 即使……也'
    }
  ],
  N3: [
    {
      id: 'n3-c-001',
      question: 'いくら探しても、鍵が＿＿。',
      options: ['見つからない', '見つけない', '見つからなかった', '見つけた'],
      answer: 0,
      explanation: '見つかる（自动词）＝ 被找到'
    },
    {
      id: 'n3-c-002',
      question: '明日の会議に＿＿かどうか、まだ決めていません。',
      options: ['出席する', '出席し', '出席して', '出席した'],
      answer: 0,
      explanation: '动词辞书形＋かどうか＝ 是否……'
    },
    {
      id: 'n3-c-003',
      question: 'この問題は難し＿＿て、誰もできなかった。',
      options: ['すぎ', 'すぎる', 'すごい', 'すごく'],
      answer: 0,
      explanation: '形容詞語幹＋すぎる＝ 太……'
    },
    {
      id: 'n3-c-004',
      question: '先生、お名前を＿＿いただけませんか。',
      options: ['教えて', '教え', '教わって', '教えられて'],
      answer: 0,
      explanation: '〜ていただけませんか＝ 能否请您……'
    }
  ],
  N2: [
    {
      id: 'n2-c-001',
      question: '一生懸命勉強した＿＿、試験に合格できた。',
      options: ['おかげで', 'せいで', 'ばかりに', 'だけあって'],
      answer: 0,
      explanation: '〜おかげで＝ 多亏……（积极结果）'
    },
    {
      id: 'n2-c-002',
      question: '約束した＿＿、彼は来なかった。',
      options: ['にもかかわらず', 'に基づいて', 'に伴って', 'どころか'],
      answer: 0,
      explanation: '〜にもかかわらず＝ 尽管……却'
    },
    {
      id: 'n2-c-003',
      question: 'この地域では、高齢化＿＿人口が減少している。',
      options: ['に伴って', 'に反して', 'にかけては', 'に先立って'],
      answer: 0,
      explanation: '〜に伴って＝ 随着……'
    },
    {
      id: 'n2-c-004',
      question: '冗談＿＿言ったのに、彼は怒ってしまった。',
      options: ['のつもりで', 'をこめて', 'からといって', 'ばかりに'],
      answer: 0,
      explanation: '〜のつもりで＝ 打算以……的心情（去做）'
    }
  ],
  N1: [
    {
      id: 'n1-c-001',
      question: '彼の傲慢な態度には我慢＿＿。',
      options: ['しきれない', 'するどころか', 'したわけではない', 'しかない'],
      answer: 0,
      explanation: '〜きれない＝ 无法完全做到'
    },
    {
      id: 'n1-c-002',
      question: '新しい事業は、軌道に＿＿時間がかかりそうだ。',
      options: ['乗るまでに', '乗っても', '乗るにつれ', '乗ろうと'],
      answer: 0,
      explanation: '〜までに＝ 到……为止之前'
    },
    {
      id: 'n1-c-003',
      question: '彼は今にも寝入らん＿＿だった。',
      options: ['ばかり', 'ほど', 'くらい', 'だけ'],
      answer: 0,
      explanation: '動詞未然形＋んばかり＝ 几乎要……'
    },
    {
      id: 'n1-c-004',
      question: '彼女は何事もなかった＿＿、平然と話し続けた。',
      options: ['かのように', 'ものなら', 'どころか', 'ばかりか'],
      answer: 0,
      explanation: '〜かのように＝ 就像……一样'
    }
  ]
}
