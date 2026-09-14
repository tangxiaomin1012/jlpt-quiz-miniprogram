// pages/quiz/quiz.js
const pools = require('../../data/index.js')
const quizUtil = require('../../utils/quiz.js')

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']
const QUESTION_COUNT = 10

Page({
  data: {
    category: 'vocab',
    level: 'N5',
    categoryName: '',
    questions: [],
    total: 0,
    index: 0,
    current: null,
    letters: LETTERS,
    selected: -1,
    answered: false,
    correctCount: 0,
    finished: false,
    rateText: 0,
    comment: ''
  },

  onLoad(options) {
    const category = options.category || 'vocab'
    const level = options.level || 'N5'
    this.setData({
      category: category,
      level: level,
      categoryName: quizUtil.CATEGORY_NAMES[category] || category
    })
    this.start()
  },

  start() {
    const pool = pools[this.data.category] || {}
    const rawQuestions = quizUtil.pickQuestions(pool, this.data.level, QUESTION_COUNT)
    const questions = rawQuestions.map(q => {
      const m = (q.id || '').match(/(\d+)$/)
      return Object.assign({}, q, { idDisplay: m ? m[1].padStart(3, '0') : '' })
    })
    this.setData({
      questions: questions,
      total: questions.length,
      index: 0,
      current: questions.length ? questions[0] : null,
      selected: -1,
      answered: false,
      correctCount: 0,
      finished: false
    })
  },

  choose(e) {
    if (this.data.answered) return
    const selected = e.currentTarget.dataset.index
    const isCorrect = selected === this.data.current.answer
    this.setData({
      selected: selected,
      answered: true,
      correctCount: this.data.correctCount + (isCorrect ? 1 : 0)
    })
  },

  next() {
    if (!this.data.answered) return
    const index = this.data.index + 1
    if (index >= this.data.total) {
      this.finish()
      return
    }
    this.setData({
      index: index,
      current: this.data.questions[index],
      selected: -1,
      answered: false
    })
  },

  finish() {
    const total = this.data.total
    const correct = this.data.correctCount
    const rate = total ? Math.round((correct / total) * 100) : 0
    let comment = '再接再厉！'
    if (total && correct / total >= 0.8) {
      comment = '非常棒，继续保持！'
    } else if (total && correct / total >= 0.6) {
      comment = '不错，再练一练吧！'
    }
    this.setData({ finished: true, rateText: rate, comment: comment })
    quizUtil.saveRecord({
      category: this.data.category,
      level: this.data.level,
      score: correct,
      total: total,
      time: Date.now()
    })
  },

  restart() {
    this.start()
  },

  goBack() {
    wx.navigateBack()
  }
})
