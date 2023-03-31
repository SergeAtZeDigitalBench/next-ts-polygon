export const newsletters = [
  {
    id: "abc",
    title: "News Daily",
    frequency: "weekly",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "bbc",
    title: "Global business elite ",
    frequency: "weekly",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]

export const fetchMockNewsletters = async (
  isRejecting = false
): Promise<
  {
    id: string
    title: string
    frequency: string
    subTitle: string
  }[]
> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isRejecting) {
        reject("Not found")
      } else {
        resolve(newsletters)
      }
    }, 700)
  })
