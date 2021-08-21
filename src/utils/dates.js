const MONTHS = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
}

export const formatDate = (date) => {
  const arr = date.split('/')
  return `${MONTHS[arr[0]]} ${arr[1]}, ${arr[2]}`
}

export const getMostRecentDate = (posts) => {
  return Object.keys(posts).toString().split(',')[0]
}
