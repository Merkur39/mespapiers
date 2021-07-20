import React from 'react'
import { CozyProvider, createMockClient } from 'cozy-client'
import I18n from 'cozy-ui/transpiled/react/I18n'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/hooks/useBreakpoints'
import { HashRouter } from 'react-router-dom'
import enLocale from '../../src/locales/en.json'
import {
  DialogModalProvider,
  StepperProvider
} from '../../src/components/Contexts'

const AppLike = ({ children, client }) => (
  <CozyProvider client={client || createMockClient({})}>
    <I18n dictRequire={() => enLocale} lang={'en'}>
      <BreakpointsProvider>
        <StepperProvider>
          <DialogModalProvider>
            <HashRouter>{children}</HashRouter>
          </DialogModalProvider>
        </StepperProvider>
      </BreakpointsProvider>
    </I18n>
  </CozyProvider>
)

export default AppLike
