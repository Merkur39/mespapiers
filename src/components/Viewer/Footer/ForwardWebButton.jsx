import React from 'react'
import PropTypes from 'prop-types'

import { useClient } from 'cozy-client'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import Button from 'cozy-ui/transpiled/react/Button'
import ReplyIcon from 'cozy-ui/transpiled/react/Icons/Reply'
import Alerter from 'cozy-ui/transpiled/react/Alerter'
import withLocales from 'cozy-ui/transpiled/react/I18n/withLocales'

import fr from '../locales/fr.json'
import en from '../locales/fr.json'

const locales = { fr, en }

/**
 * exportFilesNative - Triggers a prompt to download a file on mobile devices
 *
 * @param {CozyClient} client
 * @param {array} files    One or more files to download
 * @param {string} filename The name of the file that will be saved
 */
export const exportFilesNative = async (client, file) => {
  const response = await client
    .collection('io.cozy.files')
    .fetchFileContentById(file.id)

  const blob = await response.blob()

  return blob
}

const ForwardWebButton = ({ file }) => {
  const { t } = useI18n()
  const client = useClient()

  const onFileOpen = async file => {
    try {
      const filesArray = await exportFilesNative(client, file)
      if (navigator.canShare && navigator.canShare({ files: filesArray })) {
        navigator
          .share({
            files: filesArray,
            title: 'shared files',
            text: 'Our Files.'
          })
          .then(() => Alerter.info('Share was successful.'))
          .catch(error => Alerter.info(`Sharing failed`, error))
      } else {
        Alerter.info(`Your system doesn't support sharing files.`)
      }
    } catch (error) {
      Alerter.info(`mobile.error.open_with.${error}`, { fileMime: file.mime })
    }
  }

  return (
    <Button
      extension="full"
      theme="secondary"
      icon={ReplyIcon}
      label={t('viewer.actions.forward')}
      onClick={() => onFileOpen(file)}
    />
  )
}

ForwardWebButton.propTypes = {
  file: PropTypes.object.isRequired
}

export default withLocales(locales)(ForwardWebButton)
