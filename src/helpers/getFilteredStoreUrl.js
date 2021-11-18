import { generateUniversalLink } from 'cozy-ui/transpiled/react/AppLinker'
import CozyClient from 'cozy-client/types'

import { FILES_DOCTYPE } from 'src/doctypes'

/**
 * @param {CozyClient} client - CozyClient instance
 * @returns {string} - Store link
 */
export const getFilteredStoreUrl = client =>
  generateUniversalLink({
    cozyUrl: client.getStackClient().uri,
    slug: 'store',
    subDomainType: client.getInstanceOptions().subdomain,
    nativePath: `discover/?type=konnector&doctype=${FILES_DOCTYPE}`
  })
