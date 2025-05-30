Page({
  data: {
    scanAvailable: true,
    code: '',
  },
  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onShow: function () {
    // Do something when page show.
    // console.log(this.desensitization('310226199612181919', 4, -4))
  },
  onReady: function () {
    // Do something when page ready.
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function () {
    // Do something when page scroll
  },
  onResize: function () {
    // Do something when page resize
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  scanCode(e) {
    if (!this.data.scanAvailable) {
      return false

    }
    // 对扫码结果进行处理
    this.setData({
      // scanAvailable: false,
      // code: e.detail.result.length > 40 && e.detail.result.includes('http') ? e.detail.result.substring(e.detail.result.length - 40) : e.detail.result,
      code: e.detail.result
    })
    if (this.data.code === '数字文创') {
      wx.navigateTo({
        url: '/pages/result/result'
      })
    }
  },
  // scanCode(e) {
  //   console.log('scanCode:', e)
  // this.setData({
  //   result: e.detail,
  // })
  // },
  error(e) {
    console.log(e)
  },
  tapDialogButton(e) {
    this.setData({
      dialogShow: false,
      scanAvailable: true,
    })
  },
  handleBtnClick() {
    this.setData({
      dialogHidden: true,
      scanAvailable: true,
    })
  },
  handleConfirmBtnClick() {
    const data = {
      scan_code: this.data.code,
      again: 1,
    }
    this.handleSendCode(data)
  },
  desensitization(str, beginLen, endLen) {
    let len = str.length
    let firstStr = str.substr(0, beginLen)
    let lastStr = str.substr(endLen)
    let middleStr = str.substring(beginLen, len - Math.abs(endLen)).replace(/[\s\S]/gi, '*')
    let tempStr = firstStr + middleStr + lastStr
    return tempStr
  },
  handlePhoneClick() {
    wx.makePhoneCall({
      phoneNumber: this.data.info.phone,
    })
  },
})
