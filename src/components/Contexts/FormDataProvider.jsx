import React, { createContext, useState } from 'react'

import { models, useClient } from 'cozy-client'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import Alerter from 'cozy-ui/transpiled/react/Alerter'

import { useStepperDialog } from 'src/components/Hooks/useStepperDialog'
import getOrCreateAppFolderWithReference from 'src/helpers/getFolderWithReference'
import { createPaper } from 'src/helpers/createPaper'
import { useScannerI18n } from 'src/components/Hooks/useScannerI18n'
import { renamePaper } from 'src/helpers/renamePaper'

const { Qualification } = models.document

const FormDataContext = createContext()

const FormDataProvider = ({ children }) => {
  const client = useClient()
  const { f, t } = useI18n()
  const scannerT = useScannerI18n()
  const {
    currentDefinition,
    stepperDialogTitle,
    setIsStepperDialogOpen
  } = useStepperDialog()
  const { featureDate, label } = currentDefinition || {}
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
        const date =
          formData.metadata[featureDate] &&
          f(formData.metadata[featureDate], 'YYYY.MM.DD')

        const fileRenamed = renamePaper(
          file,
          scannerT(`items.${label}`),
          fileMetadata.page,
          date
        )
        submitSucceeded = await createPaper(
          client,
          fileRenamed,
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
