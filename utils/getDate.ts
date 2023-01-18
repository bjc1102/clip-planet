const today = new Date()

export function getNowDate() {
  return `${
    today.getMonth() + 1
  }월 ${today.getDate()}일, ${today.getFullYear()}`
}
