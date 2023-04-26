export const loadWindow = () => {
  if (typeof window !== 'undefined') {
    return { width: window.innerWidth, height: window.innerHeight }
  }
  if (typeof window === 'undefined') return
}
