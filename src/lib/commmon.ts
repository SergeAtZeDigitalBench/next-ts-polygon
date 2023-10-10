export const getRandomFromArray = <I = unknown>(arrList: I[]) => {
  if (arrList.length <= 1) return arrList[0]

  const randomIndex = Math.floor(Math.random() * arrList.length)

  return arrList[randomIndex]
}
