import React, { useMemo, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { findPlaceholdersByQualification } from 'src/helpers/findPlaceholders'
import { FormDataProvider } from 'src/components/Contexts/FormDataProvider'
import { usePapersDefinitions } from 'src/components/Hooks/usePapersDefinitions'
import { useStepperDialog } from 'src/components/Hooks/useStepperDialog'
import StepperDialogWrapper from 'src/components/StepperDialog/StepperDialogWrapper'

const CreatePaperModal = ({ onClose }) => {
  const { qualificationLabel } = useParams()
  const { papersDefinitions } = usePapersDefinitions()
  const { setCurrentDefinition, currentDefinition } = useStepperDialog()
  const allPlaceholders = useMemo(
    () =>
      findPlaceholdersByQualification(papersDefinitions, [
        {
          label: qualificationLabel
        }
      ]),
    [qualificationLabel, papersDefinitions]
  )

  const formModel = allPlaceholders[0]

  useEffect(() => {
    if (formModel && currentDefinition !== formModel) {
      setCurrentDefinition(formModel)
    }
  }, [formModel, currentDefinition, setCurrentDefinition])

  if (!currentDefinition) {
    return null
  }

  return (
    <FormDataProvider>
      <StepperDialogWrapper onClose={onClose} />
    </FormDataProvider>
  )
}

export default CreatePaperModal
