export const classnames = (...maybeClassNames: unknown[]) =>
  maybeClassNames
    .filter((currentClassname) => {
      return typeof currentClassname === "string" && !!currentClassname
    })
    .join(" ")

export const generateArrayAscending = (amount: number) =>
  Object.keys(Array(amount + 1).fill(0))
    .slice(1)
    .map((strNumeric) => ({
      id: strNumeric,
      index: parseInt(strNumeric) - 1,
    }))
