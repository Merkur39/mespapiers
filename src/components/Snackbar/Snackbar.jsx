import React from 'react'
import SnackbarMUI from '@material-ui/core/Snackbar'
import Slide from '@material-ui/core/Slide'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'

import Portal from 'cozy-ui/transpiled/react/Portal'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Icon from 'cozy-ui/transpiled/react/Icon'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import CrossIcon from 'cozy-ui/transpiled/react/Icons/Cross'
import CheckCircle from 'cozy-ui/transpiled/react/Icons/CheckCircle'
import CrossCircle from 'cozy-ui/transpiled/react/Icons/CrossCircle'
import WarningCircle from 'cozy-ui/transpiled/react/Icons/WarningCircle'

import { useSnackbarContext } from 'src/components/Snackbar/useSnackbarContext'

const useStyles = makeStyles(() => ({
  snackbarStyleDefault: {
    flexWrap: 'nowrap'
  },
  'snackbarColor-success': {
    backgroundColor: 'var(--successColor)'
  },
  'snackbarColor-error': {
    backgroundColor: 'var(--errorColor)'
  },
  'snackbarColor-info': {
    backgroundColor: 'var(--primaryColor)'
  }
}))

const SnackbarComponent = ({
  into = 'body',
  t,
  anchorOrigin = { vertical: 'bottom', horizontal: 'center' },
  transitionComponent = Slide
}) => {
  const classes = useStyles()
  const { snackbar, setSnackbar } = useSnackbarContext()
  const { open, message, type, duration, clickAway } = snackbar

  const handleClose = (evt, reason) => {
    if (reason === 'clickaway' && !clickAway) return
    setSnackbar({ open: false })
  }

  const getCheckIcon = type => {
    switch (type) {
      case 'success':
        return CheckCircle
      case 'error':
        return CrossCircle
      default:
        return WarningCircle
    }
  }

  return (
    <Portal into={into}>
      <SnackbarMUI
        anchorOrigin={anchorOrigin}
        TransitionComponent={transitionComponent}
        open={open}
        autoHideDuration={duration}
        onClose={handleClose}
        message={
          <div className={'u-flex u-flex-items-center'}>
            <span>
              <Icon icon={getCheckIcon(type)} size={16} />
            </span>
            <Typography
              variant={'body1'}
              color={'inherit'}
              className={'u-ml-1'}
            >
              {t ? t(message) : message}
            </Typography>
          </div>
        }
        ContentProps={{
          className: `${classes.snackbarStyleDefault} ${
            classes[`snackbarColor-${type}`]
          }`
        }}
        action={
          <IconButton
            onClick={handleClose}
            color={'inherit'}
            className={'u-pt-0'}
          >
            <Icon icon={CrossIcon} size={14} />
          </IconButton>
        }
      />
    </Portal>
  )
}

const anchorOriginPropType = PropTypes.shape({
  vertical: PropTypes.oneOf(['top', 'bottom']),
  horizontal: PropTypes.oneOf(['left', 'center', 'right'])
})

SnackbarComponent.propTypes = {
  into: PropTypes.string,
  t: PropTypes.func,
  anchorOrigin: anchorOriginPropType,
  transitionComponent: PropTypes.func
}

export default SnackbarComponent
