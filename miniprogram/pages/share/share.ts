// pages/share/share.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showOverlay: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
  handleShareClick() {
    this.setData({
      showOverlay: true,
    })
  },
  handleCancelClick() {
    this.setData({
      showOverlay: false,
    })
  },
  handleSaveClick() {
    wx.getImageInfo({
      src: '../../assets/images/share.png',
      success(res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.path,
          success: () => {
            wx.showToast({
              title: '保存成功',
            })
          },
        })
      },
      fail: (err) => console.log('获取图片失败', err),
    })
  },
})
