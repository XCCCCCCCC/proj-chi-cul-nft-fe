import axios from '@utils/request'
import type {
  getCompetitionRegisterItemsApiReq,
  ConfirmCompetitionItemApiReq,
  SubmitCompetitionItemApiReq,
  GetResultApiReq,
  GetResultShareApiReq,
  GetStatsApiReq,
  GetRecordListReq,
  GetRunInfoReq,
  GetSwiperListReq,
} from '@api/types/run'
enum Api {
  C_R_I = '/v3/competition/register/items', // 选择项目
  C_C_I = '/v3/competition/confirm/item', // 提交项目
  C_S_I = '/v3/competition/submit/item', // 提交项目继续跑步
  R_R_D = '/v3/member/running/record/detail', // 运动记录详情
  R_S_I = '/v3/member/running/share/image', // 分享文件
  R_S = '/v3/member/running/statistics', // 数据统计
  R_L = '/v3/member/running/list', // 运动记录
  R_I = '/v3/member/running/info', // 最佳记录
  R_C = '/v3/member/running/cycles', // 周期
}
const getCompetitionRegisterItemsApi = (params: getCompetitionRegisterItemsApiReq) => {
  return axios.get(Api.C_R_I, params)
}
const confirmCompetitionItemApi = (data: ConfirmCompetitionItemApiReq) => {
  return axios.post(Api.C_C_I, data)
}
const submitCompetitionItemApi = (data: SubmitCompetitionItemApiReq) => {
  return axios.post(Api.C_S_I, data)
}
const getResultApi = (params: GetResultApiReq) => {
  return axios.get(Api.R_R_D, params)
}
const getResultShareApi = (params: GetResultShareApiReq) => {
  return axios.get(Api.R_S_I, params)
}
const getStatsApi = (params: GetStatsApiReq) => {
  return axios.get(Api.R_S, params)
}
const getRecordListApi = (params: GetRecordListReq) => {
  return axios.get(Api.R_L, params)
}
const getRunInfoApi = (params: GetRunInfoReq) => {
  return axios.get(Api.R_I, params)
}
const getSwiperListApi = (params: GetSwiperListReq) => {
  return axios.get(Api.R_C, params)
}
export {
  getCompetitionRegisterItemsApi,
  confirmCompetitionItemApi,
  submitCompetitionItemApi,
  getResultApi,
  getResultShareApi,
  getStatsApi,
  getRecordListApi,
  getRunInfoApi,
  getSwiperListApi,
}
