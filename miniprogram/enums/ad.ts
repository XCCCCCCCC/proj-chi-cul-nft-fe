// export const AD_IMG_URL = '@img/ad.png'
import { UrlEnum } from '@enums/env'
const BASE_URL = UrlEnum[wx.getAccountInfoSync().miniProgram.envVersion]
export const AD_IMG_URL = `${BASE_URL}/static/upload/image/screen.png`
