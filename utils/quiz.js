/**
 * 测验工具：洗牌、抽题、答题记录
 */
const RECORDS_KEY = 'jlpt_quiz_records'
const MAX_RECORDS = 200

const CATEGORY_NAMES = {
  vocab: '单词',
  cloze: '填空',
  reading: '阅读'
}

const LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1']

/** Fisher-Yates 洗牌（返回新数组，不修改原数组） */
function shuffle(arr) {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const t = a[i]
    a[i] = a[j]
    a[j] = t
  }
  return a
}

/**
 * 从题库随机抽取题目：
 * 1. 题目顺序打乱  2. 选项顺序打乱并重映射正确答案
 * @param {Object} pool  形如 { N5: [...], N4: [...] } 的题库
 * @param {String} level N5~N1
 * @param {Number} count 默认 10，题库不足时取全部
 */
function pickQuestions(pool, level, count) {
  const n = count || 10
  const list = (pool && pool[level]) || []
  return shuffle(list)
    .slice(0, n)
    .map(function (item) {
      const withIdx = item.options.map(function (text, i) {
        return { text: text, i: i }
      })
      const shuffled = shuffle(withIdx)
      let answer = -1
      for (let k = 0; k < shuffled.length; k++) {
        if (shuffled[k].i === item.answer) {
          answer = k
          break
        }
      }
      return {
        id: item.id,
        question: item.question,
        passage: item.passage || '',
        explanation: item.explanation || '',
        options: shuffled.map(function (o) { return o.text }),
        answer: answer
      }
    })
}

/* ---------- 答题记录（本地存储） ---------- */

function getRecords() {
  return wx.getStorageSync(RECORDS_KEY) || []
}

/** record: { category, level, score, total, time } */
function saveRecord(record) {
  const records = getRecords()
  records.unshift(record)
  wx.setStorageSync(RECORDS_KEY, records.slice(0, MAX_RECORDS))
}

/** 某类别某级别的最佳记录（按正确率） */
function getBest(category, level) {
  const records = getRecords().filter(function (r) {
    return r.category === category && r.level === level
  })
  if (!records.length) return null
  return records.reduce(function (a, b) {
    return b.score / b.total > a.score / a.total ? b : a
  })
}

function clearRecords() {
  wx.removeStorageSync(RECORDS_KEY)
}

function formatTime(ts) {
  const d = new Date(ts)
  const p = function (n) { return (n < 10 ? '0' : '') + n }
  return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) +
    ' ' + p(d.getHours()) + ':' + p(d.getMinutes())
}

module.exports = {
  CATEGORY_NAMES: CATEGORY_NAMES,
  LEVELS: LEVELS,
  shuffle: shuffle,
  pickQuestions: pickQuestions,
  getRecords: getRecords,
  saveRecord: saveRecord,
  getBest: getBest,
  clearRecords: clearRecords,
  formatTime: formatTime
}
