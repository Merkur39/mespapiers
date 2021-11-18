import { models } from 'cozy-client'
import CozyClient from 'cozy-client'
import { IOCozyFolder } from 'cozy-client/dist/types'

import { APPS_DOCTYPE } from 'src/doctypes'

const { MAGIC_FOLDERS, ensureMagicFolder, getReferencedFolder } = models.folder

const APP_DIR_REF = `${APPS_DOCTYPE}/mypapers`

/**
 * @param {CozyClient} client - CozyClient instance
 * @param {Function} t - i18n function
 * @returns {IOCozyFolder} - My papers folder
 */
const getOrCreateAppFolderWithReference = async (client, t) => {
  const existingFolders = await getReferencedFolder(client, {
    _id: APP_DIR_REF,
    _type: APPS_DOCTYPE
  })

  if (existingFolders) {
    return existingFolders
  } else {
    const { path: administrativeFolderPath } = await ensureMagicFolder(
      client,
      MAGIC_FOLDERS.ADMINISTRATIVE,
      `/${t('folder.administrative')}`
    )

    const appFolder = await ensureMagicFolder(
      client,
      MAGIC_FOLDERS.PAPERS,
      `${administrativeFolderPath}/${t('folder.papers')}`
    )

    return appFolder
  }
}

export default getOrCreateAppFolderWithReference
