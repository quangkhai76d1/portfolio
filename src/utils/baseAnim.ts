export const createTransition = (delay = 0, duration = 1.2) => ({
  duration,
  bounce: 0,
  ease: 'easeInOut',
  delay,
});

export const createBaseInitial = (translateY = '100vh') => ({
  translateY,
  opacity: 0,
});
