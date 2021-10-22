import React, { createContext, useState } from 'react'

import { models, useClient } from 'cozy-client'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import Alerter from 'cozy-ui/transpiled/react/Alerter'

import { useStepperDialog } from 'src/components/Hooks/useStepperDialog'
import getOrCreateAppFolderWithReference from 'src/helpers/getFolderWithReference'
import { createPaper } from 'src/helpers/createPaper'

const { Qualification } = models.document

const FormDataContext = createContext()

const FormDataProvider = ({ children }) => {
  const client = useClient()
  const { t } = useI18n()
  const {
    currentDefinition,
    stepperDialogTitle,
    setIsStepperDialogOpen
  } = useStepperDialog()
  const { featureDate } = currentDefinition || {}
  const [formData, setFormData] = useState({
    metadata: {},
    data: []
  })

  const formSubmit = () => {
    const qualification = Qualification.getByLabel(stepperDialogTitle)
    const { metadata } = formData

    ;(async () => {
      let submitSucceeded = null
      const { _id: appFolderID } = await getOrCreateAppFolderWithReference(
        client,
        t
      )
      for (const { file, fileMetadata } of formData.data) {
        const newQualification = {
          ...qualification,
          ...fileMetadata,
          ...metadata,
          featureDate
        }

        submitSucceeded = await createPaper(
          client,
          file,
          newQualification,
          appFolderID
        )
        if (submitSucceeded === null) break
      }
      setIsStepperDialogOpen(false)
      if (submitSucceeded) {
        Alerter.success(t('common.saveFile.success'))
      } else {
        Alerter.error(t(`common.saveFile.error`))
      }
    })()
  }

  return (
    <FormDataContext.Provider value={{ formData, setFormData, formSubmit }}>
      {children}
    </FormDataContext.Provider>
  )
}

export default FormDataContext

export { FormDataProvider }
