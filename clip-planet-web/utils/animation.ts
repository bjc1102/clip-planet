const CardMenuVars = {
  start: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
  animation: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
  end: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
}

export const CardMenuAnimation = {
  variants: CardMenuVars,
  initial: 'start',
  animate: 'animation',
  exit: 'end',
}
