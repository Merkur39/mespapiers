import { CozyFile } from 'cozy-doctypes'

import { FILES_DOCTYPE } from 'src/doctypes'

const HTTP_CODE_CONFLICT = 409

export const createPaper = async (client, file, qualification, appFolderID) => {
  let paperCreated = null

  try {
    paperCreated = await client.create(FILES_DOCTYPE, {
      data: file,
      metadata: { qualification },
      dirId: appFolderID
    })
  } catch (err) {
    if (err.status === HTTP_CODE_CONFLICT) {
      const { filename, extension } = CozyFile.splitFilename({
        name: file.name,
        type: 'file'
      })
      const newFilename = CozyFile.generateNewFileNameOnConflict(filename)
      const newFilenameWithExt = `${newFilename}${extension}`
      const blob = file.slice(0, file.size, file.type)
      const renamedFile = new File([blob], newFilenameWithExt, {
        type: file.type
      })
      paperCreated = await createPaper(
        client,
        renamedFile,
        qualification,
        appFolderID
      )
    }
  }
  return paperCreated
}
