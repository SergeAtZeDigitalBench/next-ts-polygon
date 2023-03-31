export interface INewsletter {
  id: string
  title: string
  frequency: string
  subTitle: string
}
export interface INewsletterSubscriptions {
  newsletters: INewsletter[]
  subscriptions: string[]
  status: "idle" | "loading" | "error"
}
