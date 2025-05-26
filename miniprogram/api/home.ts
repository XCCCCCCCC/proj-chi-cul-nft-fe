import request from '@utils/request/index'
enum Api {
  Banner = '/api/v2/index/banner',
  BannerDetail = '/api/v2/index/banner-detail',
  Ugc = '/api/v2/index/ugc',
  Notice = '/api/v2/index/notice',
  NoticeDetail = '/api/v2/index/notice-detail',
}
const getBanner = () => {
  return request.get(Api.Banner)
}
const getBannerDetail = (params: any) => {
  return request.get(Api.BannerDetail, params)
}
const getNotice = (params: any) => {
  return request.get(Api.Notice, params)
}
const getNoticeDetail = (params: any) => {
  return request.get(Api.NoticeDetail, params)
}
const getUgc = (params: any) => {
  return request.get(Api.Ugc, params)
}
export { getBanner, getBannerDetail, getNotice, getNoticeDetail, getUgc }
