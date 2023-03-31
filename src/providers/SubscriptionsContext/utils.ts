import { INewsletter } from "@/types"

/**
 * @description pull out the newsletters IDs
 * @param newsletters list of newsletters
 * @returns {Array} an array of IDs
 */
export const getNewslettersIds = (newsletters: INewsletter[]) =>
  newsletters.map((current) => current.id)

/**
 * @description removes duplicates from a list of strings
 * @param array list of strings
 * @returns {Array} list without duplicates
 */
export const uniq = (array: string[]) =>
  array.reduce((unique, current) => {
    if (!unique.includes(current)) {
      unique.push(current)
    }
    return unique
  }, [] as string[])

/**
 * @description removes list of multiple values from an array,
 * needed to remove multiple or all subscriptions IDs from the list.
 * @param targetArray a list to be sanitized
 * @param valuesToRemove a list of values to remove
 * @returns {Array} an array with the specified values removed
 */
export const removeManyFromArray = (
  targetArray: string[],
  valuesToRemove: string[]
) =>
  targetArray.reduce((target, currentValue) => {
    if (!valuesToRemove.includes(currentValue)) {
      target.push(currentValue)
    }
    return target
  }, [] as string[])
