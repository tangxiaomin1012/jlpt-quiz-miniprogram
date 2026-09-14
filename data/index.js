/**
 * 题库统一入口：按类别聚合
 * 新增题库时在此注册即可
 */
module.exports = {
  vocab: require('./vocab.js'),
  cloze: require('./cloze.js'),
  reading: require('./reading.js')
}
