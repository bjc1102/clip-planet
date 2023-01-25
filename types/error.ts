interface ErrorType {
  statusCode: number
  message: string
}

const isErrorType = function (value: unknown): value is ErrorType {
  return typeof (value as ErrorType).statusCode === 'number'
}

export default isErrorType
