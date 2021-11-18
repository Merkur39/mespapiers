/**
 * Check if there is a next value
 *
 * @param {number} curr - Current value
 * @param {object} array - Array oc current value
 * @returns {boolean} - Boolean
 */
export const hasNextvalue = (curr = -1, array = []) => curr < array.length - 1
