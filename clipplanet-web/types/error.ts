interface ErrorType {
  statusCode: number
  message: string
}

const isErrorType = function (value: unknown): value is ErrorType {
  if (typeof value !== 'object' || value === null) return false

  return (
    'statusCode' in value && typeof (value as ErrorType).statusCode === 'number'
  )
}

export default isErrorType
