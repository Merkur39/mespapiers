import { CozyFile } from 'cozy-doctypes'

export const renamePaper = (file, qualificationName, pageName, date) => {
  const { extension } = CozyFile.splitFilename({
    name: file.name,
    type: 'file'
  })
  const newFilename = `${qualificationName}${
    pageName ? ` - ${pageName} - ` : ' - '
  }${'OwnerName'}${date ? ` - ${date}` : ''}`

  const newFilenameWithExt = `${newFilename}${extension}`
  const blob = file.slice(0, file.size, file.type)

  return new File([blob], newFilenameWithExt, {
    type: file.type
  })
}
