//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperDatas: [
      {
        url: 'http://www.wistronits.com/cn/images/1.jpg',
        intro: '可信赖的战略合作伙伴'
      },
      {
        url: 'http://www.wistronits.com/cn/images/2.jpg',
        intro: 'IT服务 软件外包 面向全球26年'
      },
      {
        url: 'http://www.wistronits.com/cn/images/3.jpg',
        intro: '业务流程外包 高端技术 多样系统'
      },
      {
        url: 'http://www.wistronits.com/cn/images/4.jpg',
        intro: '产品全球化Mac & iOS经验 舍我其谁'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    swiperTabDatas: [
      {
        id: 0,
        display: 'w',
        title: '纬创软件简介',
        img: '',
        subs: [
          {
            subtitle: '',
            img: '',
            intro: [
              {
                head: '',
                content: ['纬创软件是亚洲地区专业的软件外包服务及信息整合服务的的领导厂商，我们专注于技术顾问服务、软件外包服务、业务流程外包服务、以及产品全球化服务，全球有包括中国、台湾、日本、美国等9个营业据点，客户包括世界500强企业以及跨国知名企业。'],
                img: 'overview.jpg'
              }, {
                head: '',
                content: ['纬创软件的主要服务项目包括：技术顾问服务、软件外包服务、业务流程外包服务、及产品全球化服务。我们拥有丰富多样的技术资源，可满足客户不同的需求；我们采取跨区整合、全球交付的离岸开发工作模式，以提升项目开发的效率与质量；为确保我们的项目与服务的质量，我们取得CMMI level3认证，及ISO9001质量管理系统、ISO27001>信息安全管理系统等国际认证，用最严谨的标准进行软件开发、质量管理、与资安管理。'],
                img: ''
              }
            ]
          }
        ]
      },
      {
        id: 1,
        display: 'i',
        title: '公司组织',
        img: '',
        subs: [
          {
            subtitle: '',
            img: '',
            intro: [
              {
                head: '',
                content: '',
                img: 'wistronits_structure_simple.gif'
              }
            ]
          }
        ]
      },
      {
        id: 2,
        display: 'p',
        title: '经营团队',
        img: '',
        subs: [
          {
            subtitle: '',
            img: '',
            intro: [
              {
                head: '林宪铭',
                postion: '董事长',
                content: '林董事长除担任纬创软件董事长外，同时也是纬创资通董事长暨策略长，以及纬颖科技董事长。在纬创成立前，林董事长为宏碁电脑总经理，他杰出的领导能力和卓越成就，于1989年获颁中华民国杰出经理人奖，1996年获颁国立交通大学杰出校友奖。',
                img: 'team_big_simon.jpg'
              },
              {
                head: '萧清志',
                postion: '执行长兼副董事长',
                content: '萧副董事长暨执行长为美国普渡大学电脑博士，拥有丰富完整的软体产业资历，曾任美国AT&T研究员、知名财经资讯系统公司Dow Jones Telerate Systems总经理，2004年加入纬创软件，订出纬创软件专攻软件外包服务的营运策略，并同步带进全新经营管理模式，带领纬创软件年营收持续成长，十年内公司上市，成为国际级IT软体外包服务领导厂商。',
                img: 'team_big_ching.jpg'
              },
              {
                head: '张志伟',
                postion: '资深副总(大中华事业群总经理)',
                content: '曾任台湾IBM全球资讯科技服务事业部总经理、IBM大中华区工商事业群总经理，累积超过20年产业经验，娴熟两岸IT业务，擅于掌握市场趋势与了解企业成长所趋，协助客户突破瓶颈，重获动能，在高度竞争的市场里屡创佳绩。毕业于国立政治大学应用数学系，并取得美国Case Western Reserve大学控制及工业工程硕士学位。',
                img: 'team_big_rick.jpg'
              },
              {
                head: '大阿久昌彦',
                postion: '社长(事业单位代表取缔役社长)',
                content: '曾任职日本IBM 32年，并担任IT Frontier株式会社副社长、A&I System社长等职务，产业经验丰富，累积IT业界丰沛人脉与知名度，对于纬创软件日本事业单位拓展中国市场的离岸开发业务深具贡献。经营方针为：透过经营战略及政策施行，让客户、股东及员工获得最大利益。毕业于北海道大学工学院建筑工学系，专攻电脑构造解析以及地震振动解析。',
                img: 'team_big_da.jpg'
              },
              {
                head: '郑以芬',
                postion: '副总经理(事业单位总经理)',
                content: '拥有20多年软件外包服务与产品全球化的经验与深厚背景，2002年加入纬创软件团队，历任纬软台湾、上海与美国区总经理，奠定业务发展策略与规划成长蓝图，率领台湾纬创软件通过CMMI Level 3认证，并获选为经济部BEST软体外包服务旗舰公司，带领纬创软件成为台湾软件外包服务优质企业。于美国乔治亚大学取得教育传播与科技研究所硕士学位。',
                img: 'team_big_yvonne.jpg'
              },
              {
                head: '刘建民',
                postion: '副总经理(事业单位总经理)',
                content: '曾任职资讯工业策进会、拓宇科技国际股份有限公司高阶主管。在互联网金融、电子商务、资讯产业市场研究、银行资讯系统、软体工程、外包业务发展方面积累丰富经验。目前专注于软体外包领域，结合大陆与台湾的优势，开拓大中华市场，并在多个开发中心实施。在东吴大学及淡江大学取得学士及硕士学位，北京清华大学EMBA。',
                img: 'team_big_jamie.jpg'
              },
              {
                head: '杨玉翔',
                postion: '副总经理(事业单位总经理)',
                content: '拥有20多年IT行业从业经验，兼具深厚的技术专业与业务开发能力，曾任武汉大学和华中科技大学兼职教授，武汉鑫讯科技有限公司总经理。2003年加入纬创软件，2013年带领武汉团队由成本中心顺利转型为利润中心，并发展成功的外包服务模式，带动华中地区业务连年大幅成长，现任武汉市服务贸易(外包)协会理事长。北京航空航天大学硕士。',
                img: 'team_big_yang.jpg'
              },
              {
                head: '张恩庆',
                postion: '处长(事业单位总经理)',
                content: '现任美国事业单位副总经理，任职纬软逾24年，历任CIO、产品全球化服务业务主管、杭州及上海总经理等职务，具30年IT资深背景，国际级专案经验丰富，在领导业务策略和运营管理拥有经过验证的能力，且一路带领纬软团队取得ISO9001、27001、TIPS认证。毕业于国立成功大学统计系，并于美国麻州大学Lowell分校取得硕士学位。',
                img: 'team_big_robert.jpg'
              },
              {
                head: '颜大纬',
                postion: '处长(事业单位总经理)',
                content: '曾任职资讯工业策进会、拓宇科技国际股份有限公司及东元集团子公司等企业的高阶主管。在金融资讯系统、付款机制、大型专案管理、资讯系统规划建置与外包营运上，具备丰富的实务经验，目前专注提供大型企业的专案开发与资讯外包服务。取得大同大学资讯工程学士及硕士学位，以及国立台湾大学EMBA硕士学位。',
                img: 'team_big_david.jpg'
              },
              {
                head: '曾永丰',
                postion: '财务管理总处处长兼发言人',
                content: '曾任众信(Deloitte)联合会计师事务所审计领组，扬明光学股份有限公司管理会计主管、资材主管、高阶主管特助，期间推动营运预测资讯系统专案、精实(Lean)专案。对营运管理、流程改善活动、经营分析拥有丰富经验。取得国立中山大学财务管理学系学士与硕士学位。',
                img: 'team_big_jeff.jpg'
              }
            ]
          },
        ]
      },
      {
        id: 3,
        display: 't',
        title: '公司沿革',
        img: '',
        subs: [
          {
            subtitle: '',
            img: '',
            intro: [
              {
                head: '2018',
                content: '取得ISO20000信息技术服务管理体系、ISO22301业务连续性管理体系认证。',
                img: ''
              },
              {
                head: '2016',
                content: '通过台湾智慧财产管理规范(TIPS)认证。',
                img: ''
              },
              {
                head: '2015',
                content: '通过ITSS信息技术服务标准认证。获全球著名语言行业调查机构CSA(Common Sense Advisory)评选为亚洲前30大软件全球化服务供货商，排名第 26名。',
                img: ''
              },
              {
                head: '2014',
                content: '在台湾上柜。台湾软件业第一家通过ISO27001(2013新版)公司。',
                img: ''
              },
              {
                head: '2012',
                content: '营收成长率创新高，展现整合成果。',
                img: ''
              },
              {
                head: '2011',
                content: '扩大日本团队规模，提升国际化与在地化程度。',
                img: ''
              },
              {
                head: '2008-2010',
                content: '取得 CMMI Level 3，ISO27001等认证。',
                img: ''
              },
              {
                head: '2007',
                content: '成为IBM指定的亚太区核心供货商。',
                img: ''
              },
              {
                head: '2006',
                content: '建立跨国多据点的管理能力，进入持续获利状态。',
                img: ''
              },
              {
                head: '2004',
                content: '更名为纬创软件，定位发展方向，扩大国际业务发展。',
                img: ''
              },
              {
                head: '2002',
                content: '纬创集团入资。',
                img: ''
              },
              {
                head: '1992',
                content: '公司成立，以提供产品全球化服务为主，与国际大厂(IBM、微软、Oracle、Apple等)建立合作关系。',
                img: ''
              },
            ]
          }
        ]
      },
      {
        id: 4,
        display: 'w',
        title: '核心价值',
        img: '',
        subs: [
          {
            subtitle: '',
            img: '',
            intro: [
              {
                head: '',
                content: ['「客尊」、「诚信」与「创新」是纬创软件的企业核心价值；「因应市场国际化需求，从亚洲出发，成为国际级的IT服务提供商」是纬创软件的愿景。'],
                img: 'core-values.jpg'
              }, {
                head: '',
                content: ['我们致力于成为客户长期而值得信赖的合作伙伴，与客户建立长期双赢的关系，客户的永续经营，就是纬创软件得以继续成长的关键。秉持诚信的态度，追求创新的不懈精神，我们承诺为客户提供具国际水平的技术顾问服务、软件外包服务、业务流程外包服务与产品全球化服务，降低客户的营运成本，并提升服务质量，客户的最大利益，就是纬创软件的成就来源。', '<br>纬创软件的软件外包服务及IT服务多年来深受国内外客户肯定，未来我们仍将立足亚洲、放眼天下，继续提供高质量的服务满足客户需求，创造客户的价值。成为国际级的IT服务提供商。'],
                img: ''
              }
            ]
          }
        ]
      },
    ]
  },

  /**
 * 生命周期函数--监听页面初次渲染完成
 */
  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
    this.tabCard = this.selectComponent("#tabCard");
  },

  showDialog() {
    this.dialog.showDialog();
  },

  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  }
})
