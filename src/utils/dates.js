export const formatDate = date => {
  const arr = date.split(' ')
  return `${arr[0]}, ${arr[1]} ${arr[2]}, ${arr[3]}`
}

export const getMostRecentDate = posts => {
  return Object.keys(posts)
    .toString()
    .split(',')[0]
}
