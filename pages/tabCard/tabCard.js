Page({
  data: {
    swiperTabDatas: [
      {
        id: 0,
        title: '纬创软件简介',
        img: '',
        subs: [
          {
            subtitle: '',
            img: '',
            intro: [
              {
                head: '',
                content: '纬创软件是亚洲地区专业的软件外包服务及信息整合服务的的领导厂商，我们专注于技术顾问服务、软件外包服务、业务流程外包服务、以及产品全球化服务，全球有包括中国、台湾、日本、美国等9个营业据点，客户包括世界500强企业以及跨国知名企业。',
                img: 'overview.jpg'
              }, {
                head: '',
                content: '纬创软件的主要服务项目包括：技术顾问服务、软件外包服务、业务流程外包服务、及产品全球化服务。我们拥有丰富多样的技术资源，可满足客户不同的需求；我们采取跨区整合、全球交付的离岸开发工作模式，以提升项目开发的效率与质量；为确保我们的项目与服务的质量，我们取得CMMI level3认证，及ISO9001质量管理系统、ISO27001信息安全管理系统等国际认证，用最严谨的标准进行软件开发、质量管理、与资安管理。',
                img: ''
              }
            ]
          }
        ]
      },
      {
        id: 1,
        title: '公司组织'
      },
      {
        id: 2,
        title: '经营团队'
      },
      {
        id: 3,
        title: '公司沿革'
      }
    ],
    currentIndex: 0,//tabbar索引 
  },
  navbarTab: function (e) {
    console.log(e)
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    });
  }
})