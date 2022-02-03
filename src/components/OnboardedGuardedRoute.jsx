import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useQuery, hasQueryBeenLoaded } from 'cozy-client'
import Spinner from 'cozy-ui/transpiled/react/Spinner'

import { getOnboardingStatus } from 'src/helpers/queries'

const OnboardedGuardedRoute = ({ component: Component, ...rest }) => {
  const { data: settingsData, ...settingsQuery } = useQuery(
    getOnboardingStatus.definition,
    getOnboardingStatus.options
  )
  const onboarded = settingsData?.[0]?.onboarded

  return !hasQueryBeenLoaded(settingsQuery) ? (
    <Spinner
      size="xxlarge"
      className="u-flex u-flex-justify-center u-mt-2 u-h-5"
    />
  ) : (
    <Route
      {...rest}
      render={props => {
        const isOnboardingPage = rest?.path === '/onboarding'

        if (isOnboardingPage && onboarded === true) {
          return <Redirect to="/" />
        } else if (!isOnboardingPage && onboarded !== true) {
          return <Redirect to="/onboarding" />
        } else {
          return <Component {...props} />
        }
      }}
    />
  )
}

export default OnboardedGuardedRoute
