var app = getApp();

var overviewDesc = '米鹿儿童美术馆的创立，源于米鹿团队对孩子们的喜爱以及对创意美术事业的热情，美术馆致力于把最系统专业的美术课程呈现给您的宝贝，让孩子在轻松快乐的氛围中迸发想象力，绘出一片色彩斑斓的星空。'

var sinceTime = '2016年'

var teamDesc = '老师均毕业于专业艺术类院校，不仅拥有过硬的教学水平，同时深谙儿童心理学。专业化的教学团队，定时定量进行课程内训与研发，力图把最好的一面呈现给您的宝贝，不同年龄段的孩子都能在米鹿找到最适合的美术课程。'

var features = ['0元体验', '免费wifi', '主题活动', '小班教学'];

var logo = '/image/mideer-logo.jpg'
Page({
  data: {
      overview: overviewDesc,
      sinceTime: sinceTime,
      team: teamDesc,
      features: features,
      logo: logo
  },
  onLoad: function (options) {
    console.log('onLoad')
  },
})
