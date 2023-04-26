import { URLType } from '@/types/clip'
import { ChangeTypeOfKeys } from '@/types/utils'
import validUrl from 'valid-url'

export default function urlValidation({ siteURL }: URLType) {
  const errors: ChangeTypeOfKeys<URLType> = {}
  if (!siteURL) {
    errors.siteURL = 'url이 입력되지 않았습니다'
    return errors
  }
  if (!validUrl.isUri(siteURL)) {
    errors.siteURL = '유효한 url 형식이 아닙니다'
    return errors
  }
  return errors
}

export function isFormValidate<T>(error: ChangeTypeOfKeys<T>) {
  //error가 있다면, value값이 입력되지 않았다면
  if (!!Object.keys(error).length) return true
  return false
}
