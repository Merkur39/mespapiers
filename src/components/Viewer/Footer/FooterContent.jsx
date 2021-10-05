import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import useBreakpoints from 'cozy-ui/transpiled/react/hooks/useBreakpoints'

import { showPanel } from '../helpers'
import Sharing from './Sharing'
import ForwardWebButton from './ForwardWebButton'
import DownloadButton from './DownloadButton'
import BottomSheetWrapper from './BottomSheetWrapper'
import BottomSheetContent from './BottomSheetContent'

const useStyles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    width: 'calc(100% - 2rem)',
    height: '100%',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderTop: `1px solid ${theme.palette.divider}`
  }
}))

const FooterContent = ({ file, toolbarRef }) => {
  const styles = useStyles()
  const { isMobile } = useBreakpoints()
  const FileActionButton = isMobile ? ForwardWebButton : DownloadButton
  const actionButtonsRef = useRef()

  if (showPanel({ file })) {
    return (
      <BottomSheetWrapper
        file={file}
        actionButtonsRef={actionButtonsRef}
        toolbarRef={toolbarRef}
      >
        <BottomSheetContent
          file={file}
          ref={actionButtonsRef}
          FileActionButton={FileActionButton}
        />
      </BottomSheetWrapper>
    )
  }

  return (
    <div className={styles.footer}>
      <Sharing file={file} />
      <FileActionButton file={file} />
    </div>
  )
}

FooterContent.propTypes = {
  file: PropTypes.object.isRequired
}

export default FooterContent
