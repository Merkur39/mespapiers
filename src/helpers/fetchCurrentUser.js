import CozyClient from 'cozy-client'

import { CONTACTS_DOCTYPE } from 'src/doctypes'

/**
 * @param {CozyClient} client - CozyClient instance
 * @returns {object} - Current User
 */
export const fetchCurrentUser = async client => {
  const contactCollection = client.collection(CONTACTS_DOCTYPE)
  const { data: currentUser } = await contactCollection.findMyself()

  return currentUser[0]
}
