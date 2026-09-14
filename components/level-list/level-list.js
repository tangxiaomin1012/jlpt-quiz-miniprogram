// components/level-list/level-list.js
const pools = require('../../data/index.js')
const quizUtil = require('../../utils/quiz.js')

const LEVEL_COLORS = {
  N5: '#2E9E5B',
  N4: '#2F6FD1',
  N3: '#C9A227',
  N2: '#E07B24',
  N1: '#D64545'
}

Component({
  properties: {
    category: {
      type: String,
      value: 'vocab'
    }
  },

  data: {
    levels: []
  },

  lifetimes: {
    attached() {
      this.refresh()
    }
  },

  pageLifetimes: {
    // 从测验页返回时刷新最佳成绩
    show() {
      this.refresh()
    }
  },

  methods: {
    refresh() {
      const category = this.data.category
      const pool = pools[category] || {}
      const levels = quizUtil.LEVELS.map(function (lv) {
        const best = quizUtil.getBest(category, lv)
        return {
          level: lv,
          color: LEVEL_COLORS[lv],
          count: (pool[lv] || []).length,
          bestText: best ? '最佳 ' + best.score + '/' + best.total : ''
        }
      })
      this.setData({ levels: levels })
    },

    onTap(e) {
      const level = e.currentTarget.dataset.level
      wx.navigateTo({
        url: '/pages/quiz/quiz?category=' + this.data.category + '&level=' + level
      })
    }
  }
})
