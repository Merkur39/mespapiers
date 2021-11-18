import get from 'lodash/get'

import { QualificationAttributes } from 'cozy-client/dist/types'

/**
 * @typedef {object} StepAttributes
 * @property {string} name - Name of the attribute.
 * @property {string} type - Type of the attribute.
 * @property {string} inputLabel - Name of input label.
 */
/**
 * @typedef {object} AcquisitionSteps
 * @property {number} stepIndex - Position of the step.
 * @property {number} [multipage] - Defined if this step repeats.
 * @property {string} illustration - Name of the illustration.
 * @property {string} text - Text of the step.
 * @property {StepAttributes[]} attributes - Array of the attributes.
 */
/**
 * @typedef {object} ConnectorCriteria
 * @property {string} category - Category name belonging of the konnector.
 */
/**
 * @typedef {object} Paper
 * @property {string} label - Label of Paper.
 * @property {string} icon - Icon of Paper.
 * @property {number} [placeholderIndex] - Position on the Placeholder list.
 * @property {AcquisitionSteps[]} acquisitionSteps - Array of acquisition steps.
 * @property {ConnectorCriteria} [connectorCriteria] - Array of acquisition steps.
 * @property {string} [featureDate] - Reference the attribute "name" to be used as main date.
 * @property {number} maxDisplay - Number of document beyond which a "see more" button is displayed.
 */

/**
 * Filters and sorts the list of featured PlaceHolders
 *
 * @param {object} papersDefinitions - PapersDefinitions.json content
 * @param {Paper[]} [papers=[]] - Array of Papers
 * @returns {Paper[]} - an array of Papers filtered with the prop "placeholderIndex",
 * which does not already exist in DB and
 * which sorted with the prop "placeholderIndex"
 */
export const getFeaturedPlaceholders = (papersDefinitions, papers = []) => {
  return papersDefinitions
    .filter(
      paperDefinition =>
        !papers.some(
          paper =>
            get(paper, 'metadata.qualification.label') === paperDefinition.label
        ) && paperDefinition.placeholderIndex
    )
    .sort((a, b) => a.placeholderIndex - b.placeholderIndex)
}

/**
 * Find and sort placeholders by Qualification
 *
 * @param {object} papersDefinitions - PapersDefinitions.json content
 * @param {QualificationAttributes[]} [qualificationItems=[]] - Array of qualification items
 * @returns {Paper[]} - Array of Paper
 */
export const findPlaceholdersByQualification = (
  papersDefinitions,
  qualificationItems = []
) => {
  return papersDefinitions
    .filter(paperDefinition =>
      qualificationItems.some(item => item.label === paperDefinition.label)
    )
    .sort((a, b) => b.acquisitionSteps.length - a.acquisitionSteps.length)
}
