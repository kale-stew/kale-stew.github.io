const BODY = 'body'

export const addClass = (element, className) => element.classList.add(className)
export const addClassToBody = (className) => addClass(getBody(), className)
export const getBody = () => getElement(BODY)
export const getElement = (selector) => document.querySelector(selector)
export const hasClass = (element, className) =>
  element.classList.contains(className)
export const hasClassOfBody = (className) => hasClass(getBody(), className)
export const removeClass = (element, className) =>
  element.classList.remove(className)
export const removeClassToBody = (className) =>
  removeClass(getBody(), className)