import { TabEnum, ItemTypeEnum } from '@/enums/run'
export interface getCompetitionRegisterItemsApiReq {
  run_record_id?: number
}
export interface ConfirmCompetitionItemApiReq {
  competition_id: number
  item_type: ItemTypeEnum
  sequence?: number
}
export interface SubmitCompetitionItemApiReq {
  competition_id: number
  item_type: ItemTypeEnum
  run_record_id: number
}
export interface GetResultApiReq {
  run_record_id: number
}
export interface GetResultShareApiReq {
  run_record_id: number
}
export interface GetStatsApiReq {
  group_type: TabEnum
  year?: number
  month?: number
  start_date?: string
}
export interface GetRecordListReq {
  group_type: TabEnum
  page?: number
  page_size?: number
  year?: number
  month?: number
  start_date?: string
}
export interface GetRunInfoReq {
  include_personal_best: number
}
export interface GetSwiperListReq {
  group_type: TabEnum
}
