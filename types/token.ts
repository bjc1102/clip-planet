interface Token {
  refreshToken: string
}

export interface LocalToken {
  state: Token
}
