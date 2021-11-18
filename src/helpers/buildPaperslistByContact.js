import { isReferencedById, isReferencedBy, models } from 'cozy-client'
import { IOCozyFile } from 'cozy-client/dist/types'

import { CONTACTS_DOCTYPE } from 'src/doctypes'
const {
  contact: { getDisplayName }
} = models

const getPaperWithoutContact = papersList => {
  return papersList.filter(paper => !isReferencedBy(paper, CONTACTS_DOCTYPE))
}

const DEFAULT_MAX_DISPLAY = 3

/**
 * @typedef {object} BuildPaperslistByContactParam
 * @property {object[]} papersList - Array of IOCozyFile
 * @property {object[]} contactsList - Array of cozy contact object
 * @property {object[]} defaultName - Name of header of papers without contact
 * @property {Paper[]} [papersDefinitions=[]] Array of Papers
 * @property {string} [currentFileCategory=''] - Category of qualification
 */

/**
 * @param {BuildPaperslistByContactParam} param - BuildPaperslistByContact options
 * @returns {{ withHeader: boolean, contact: string, papers: {maxDisplay: number, list: IOCozyFile[]} }[]}
 */
export const buildPaperslistByContact = ({
  papersList,
  contactsList,
  defaultName,
  papersDefinitions = [],
  currentFileCategory = ''
}) => {
  let result = []
  const paperWithoutContact = getPaperWithoutContact(papersList)
  const currentDef = papersDefinitions.find(
    paperDef => paperDef.label === currentFileCategory
  )
  const maxDisplay = currentDef?.maxDisplay || DEFAULT_MAX_DISPLAY
  const withHeader = !(
    paperWithoutContact.length === papersList.length && papersList.length > 0
  )

  result = contactsList.map(contact => ({
    withHeader,
    contact: getDisplayName(contact),
    papers: {
      maxDisplay,
      list: papersList.filter(paper =>
        isReferencedById(paper, CONTACTS_DOCTYPE, contact._id)
      )
    }
  }))

  const resultSorted = result.sort((a, b) => a.contact.localeCompare(b.contact))

  if (paperWithoutContact.length > 0) {
    resultSorted.push({
      withHeader,
      contact: defaultName,
      papers: {
        maxDisplay,
        list: paperWithoutContact
      }
    })
  }

  return resultSorted
}
