// pages/profile/profile.js
const quizUtil = require('../../utils/quiz.js')

Page({
  data: {
    totalQuizzes: 0,
    totalQuestions: 0,
    totalCorrect: 0,
    accuracyText: '0',
    bests: [],
    records: []
  },

  onShow() {
    this.refresh()
  },

  refresh() {
    const records = quizUtil.getRecords()
    let questions = 0
    let correct = 0
    records.forEach(function (r) {
      questions += r.total
      correct += r.score
    })

    const categories = ['vocab', 'cloze', 'reading']
    const bests = []
    categories.forEach(function (cat) {
      const row = {
        category: cat,
        categoryName: quizUtil.CATEGORY_NAMES[cat],
        cells: quizUtil.LEVELS.map(function (lv) {
          const best = quizUtil.getBest(cat, lv)
          return {
            level: lv,
            text: best ? best.score + '/' + best.total : '-'
          }
        })
      }
      bests.push(row)
    })

    const recent = records.slice(0, 20).map(function (r, i) {
      return {
        key: i,
        title: (quizUtil.CATEGORY_NAMES[r.category] || r.category) + ' · ' + r.level,
        score: r.score,
        total: r.total,
        timeText: quizUtil.formatTime(r.time)
      }
    })

    this.setData({
      totalQuizzes: records.length,
      totalQuestions: questions,
      totalCorrect: correct,
      accuracyText: questions ? Math.round((correct / questions) * 100) : 0,
      bests: bests,
      records: recent
    })
  },

  clearHistory() {
    wx.showModal({
      title: '清空记录',
      content: '确定要清空所有答题记录吗？',
      confirmColor: '#D64545',
      success: (res) => {
        if (res.confirm) {
          quizUtil.clearRecords()
          this.refresh()
        }
      }
    })
  }
})
