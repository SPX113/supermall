module.exports ={
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport" :{
      viewportWidth: 320, //视窗的宽度，对应我们设计稿的宽度
      viewportHeight: 568, //视窗的高度，对应我们设计稿的高度
      unitPrecision: 5, //指定‘px’转换为视窗单位值得小数位数
      viewportUnit: 'vw',//指定需要转换成得视窗单位,建议用vw
      selectorBlackList: ['ignore','tab-bar','tab-bar-item'],//指定不需要转换的类
      minPixelValue: 1, //小于‘1px’不转换
      mediaQuery: false, //允许在媒体查询中转换‘px’
      exclude:[/TabBar/] //不包括***开头的文件
    }
  }
}