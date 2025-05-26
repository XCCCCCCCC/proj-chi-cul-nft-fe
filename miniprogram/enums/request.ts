/**
 * @description: Request result set
 */
export enum ResultEnum {
  STATUS_SUCCESS = 200,
  STATUS_SUCCESS_NO_CONTENT = 204,
  SUCCESS = 0,
  ERROR = -1,
  TIMEOUT = 7,
  TYPE = 'success',
}
/**
 * @description: request method
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
/**
 * @description:  contentType
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
/**
 * @description:  signEnum
 */
export enum SignEnum {
  VERSION = 'V1.0',
  TIMEOUT60000 = 60000,
}
/**
 * @description:  headerEnum
 */
export enum headerEnum {
  RYANG_APP_ID = 'Ryang-App-Id',
  RYANG_TS = 'Ryang-Ts',
  RYANG_NONCESR = 'Ryang-Noncesr',
  RYANG_SIGN = 'Ryang-Sign',
}
