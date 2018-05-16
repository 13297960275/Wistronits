// pages/applications/applications.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    swiperTabDatas: [
      {
        id: 0,
        display: 'w',
        title: '大数据',
        img: '',
        subs: [
          {
            subtitle: '',
            img: '',
            intro: [
              {
                head: '',
                content: ['资料仓储及大数据分析是所有企业最重要的资产之一，也是企业经营时重要的信息來源。因此，维持数据资料库的正常运作并提高巨量数据资料库使用效率，是每个 IT 部门的主要课题。'],
                img: ''
              }
            ]
          },
          {
            subtitle: '资料仓储/大数据建置与咨询服务',
            img: '',
            intro: [
              {
                head: '',
                content: ['纬创软件累积多年建置、维护、开发、设计数据库建置规画的经验，我们提供专业的「资料仓储/大数据建置与咨询服务」，并以实作经验，协助客户的巨量资料及数据稳定运作，并发挥最大数据分析效益。'],
                img: 'images_applications_bigdata1.jpg'
              },
              {
                head: '',
                content: ['其中尤其针对 Teradata /Oracle/DB2/SQL 等..数据数据库具备完整建置经验，本公司有知名电信、银行等大型客户之项目委外建置经验，故以纬创软件丰富的系统软件开发经验结合Teradata/Oracle/DB2/SQL… 等资料库规划、软件开发系统设计的经验，提供客户一站购足的服务。'],
                img: ''
              },
              {
                head: '服务特色',
                content: ['<h5>商业智能/DW/大数据系统项目开发<h5>具备深厚专业領域知識的开发团队，以其出色的技术能力与累积多年的项目实际导入经验，利用 BI / ETL工具以及标准化作业流程，开发符合企业组织分析需求的产品与大数据分析服务，协助客户以套装产品的导入便利性，创造出其独特的商业智能价值。<nr><br><h5>数据仓储 / ETL / 大数据专业人才委外服务 </h5>纬创软件公司可配合客户业务及项目执行需要，投入具实务经验之DW / BI / Big Data/ ETL / AI专业技术人才，并提供客户最完整而专业的技术人才支持服务，本公司亦提供不同深度、不同应用领域的技术开发维护人力，充分配合客户项目开发期程，让客户在DW / BI / Big Data/ ETL各式商业分析应用项目，保持高度之技术资源整合，使企业在产品销售、应用、营运等信息数据分析应用保有卓越的竞争优势。'],
                img: ''
              },
              {
                head: '成功案例',
                content: ['多家大型知名银行、知名保险集团、电信公司、医疗通路集团。', '<ul><li>资料库 : Teradata /SQL /ORACLE/DB2</li><li>ETL Tool : DW Automation/Trinity/Informatica/SSIS/Datastage</li><li>BI Tool : Tableau/OLAP/R/Hadoop/Python/Cognos/Celebrus</li><li>Other skills : SA/Data Model Design/SQL/SSRS/JAVA/.NET /Shell/python/spark/HTML/JQuary/Javascript/OLAP/R/Tensorflow/ Microsoft Azure</li><li>成功建置案例：<b>综合客户管理系统(CRM)、责任绩效管理系统(EPM)、管理信息系统(MIS)、经营决策管理系统(EIS)、交互式营销分析模型、ETL数据转置、精准营销分析、销售管理信息系统、IFRS 资产损益及揭露系统、客户流失率预测。</b></li></ul>'],
                img: ''
              }
            ]
          },
          {
            subtitle: '互联网广告资料分析',
            img: '',
            intro: [
              {
                head: '',
                content: ['纬创软件的互联网广告数据分析主要利用网络媒体（如Yahoo，Google等）的后台数据进行整理分析，从而为客户提供最佳网络营销方案。该项目解决了客户营销精准化，以及消费可视化的问题，可协助企业更精准的找到目标客户，在有限的广告费用范围内，更有效的推广自己的产品。'],
                img: 'images_applications_bigdata2.jpg'
              },
              {
                head: '服务內容',
                content: ['由于IT技术的不断进步，数据分析也逐渐由人工转为机械，但广告行业由于变化快，变化多的特点所以无论怎样都需要一部分数据需要人工来做，我们就是主要透过Google，Yahoo，百度，360等各大搜索媒体的网络原始数据进行分析，针对自动化解决不了的问题，纬创软件可以经由大数据分析师进行数据整合及分析，提供营销建议。'],
                img: ''
              },
              {
                head: '成功案例',
                content: ['为日本知名广告公司服务10年，一直得到客户的信赖与认可。'],
                img: ''
              }
            ]
          }
        ]
      },
      {
        id: 1,
        display: 'w',
        title: '金融科技',
        img: '',
        subs: [
          {
            subtitle: '',
            img: '',
            intro: [
              {
                head: '',
                content: ['全球支付市场快速变化，金融业的竞争优势为不断推动创新的商业模式，纬创软件的技术平台与组件功能标准化设计以及整体解决方案，能协助金融机构共同面对快速的市场脉动，提供新兴应用科技，与创造新的附加价值。'],
                img: 'images_applications_financial_technology.jpg'
              }
            ]
          },
          {
            subtitle: '服务类型',
            img: '',
            intro: [
              {
                head: '',
                content: ['纬创软件依客户需求可提供包括以下类型的服务：<ul><li>技术顾问服务(技术人力派遣)</li><li>项目开发</li><li>测试服务</li><li>维运服务</li><li>金融相关业务流程外包服务</li></ul>'],
                img: ''
              }
            ]
          },
          {
            subtitle: '全方位金流支付服务',
            img: '',
            intro: [
              {
                head: '',
                content: ['因应金融数字化的浪潮，纬创软件针对金融业客户提出全方位金流支付服务，无论金融业者要委外或自建，都有齐备的选择方案，包括：<ul><li>行动商务(mCommerce)。</li><li>点对点平台 (Peer - to - Peer Platforms， P2P) 。</li><li>第三方支付。</li><li>红利集点。</li><li>储值支付。</li><li>电子货币包支付。</li><li>行动APP等。</li></ul>在行动支付的解决方案，纬创软件提供银行信用卡、金融卡与HCE支付平台间的付款介接服务。'],
                img: ''
              }
            ]
          },
          {
            subtitle: '服务特色',
            img: '',
            intro: [
              {
                head: '',
                content: ['协助金融业者快速导入系统，并具有弹性。包括：<ul><li>消费性电子支付服务金流平台系统建置</li><li>互联网金流多元支付解决方案</li><li>技术平台与组件功能的标准化设计</li></ul>'],
                img: ''
              }
            ]
          },
          {
            subtitle: '成功案例',
            img: '',
            intro: [
              {
                head: '',
                content: ['2015年11月开始陆续帮多家知名银行导入金融科技相关解决方案。'],
                img: ''
              }
            ]
          }
        ]
      },
      {
        id: 2,
        display: 'w',
        title: '人工智能',
        img: '',
        subs: [
          {
            subtitle: '',
            img: '',
            intro: [
              {
                head: '',
                content: ['纬创软件的人工智能机器人系统，透过语意分析和人机交互等先进的人工智能技术为基础，以拟人化方式通过互联网或者移动端与用户进行交互。同时进行客户服务和业务营销。在提升服务的质量和企业形象的同时，能够标准化高质量服务，增强用户体验，进而缩减日益增长的客服成本。'],
                img: 'images_applications_ai.jpg'
              },
              {
                head: '服务内容',
                content: ['智能客服提供了四大应用，打造高效能客户服务平台：<h5>智能机器人</h5>由传统一对一电话客服模式升级为一对多机器人服务模式，实现人机互动情景，有效提升服务效率与质量。<h5>在线文字客服</h5>自由切换真人客服，同一对话窗口介接，让服务的在线文字客服人员可以快速了解客户问题，并提供最精确的答案。<h5>企业内部智能助理 </h5>统筹企业内部信息，替代传统制式规范规章供查询的不便，增加企业信息发布的实时性．<h5>客服知识管理 </h5>透过建置与扩充客服知识库，智能机器人将能不断增加能应付问题范围与内容，协助企业扩大24 * 7的服务范围。'],
                img: ''
              },
              {
                head: '服务特色',
                content: ['<ul><li>整合多样化知识来源。</li><li>接入网站及行动通讯软件。</li><li>提供帐务查询服务。</li><li>应用大数据工具分析用户行为。</li><li>完善的在线维运工具。</li><li>企业、产业知识库的整合与分享。</li></ul>'],
                img: ''
              },
              {
                head: '成功案例',
                content: ['<ul><li>知名金控智能客户服务平台。</li><li>知名证券理财机器人。</li></ul>'],
                img: ''
              }
            ]
          },
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.tabCard = this.selectComponent("#tabCard");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})