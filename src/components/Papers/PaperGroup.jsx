import React, { Fragment } from 'react'
import get from 'lodash/get'
import { useHistory } from 'react-router-dom'

import List from 'cozy-ui/transpiled/react/MuiCozyTheme/List'
import ListSubheader from 'cozy-ui/transpiled/react/MuiCozyTheme/ListSubheader'
import ListItem from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItem'
import ListItemIcon from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemSecondaryAction'
import { useI18n } from 'cozy-ui/transpiled/react/I18n'
import { Icon } from 'cozy-ui/transpiled/react'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import Divider from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'
import IconPdf from 'cozy-ui/transpiled/react/Icons/FileTypePdf'
import Right from 'cozy-ui/transpiled/react/Icons/Right'

import { getAllQualificationLabel } from 'src/utils/queries'
import { useScannerI18n } from 'src/components/Hooks/useScannerI18n'
import { useSnackbarContext } from 'src/components/Snackbar/useSnackbarContext'
import { useQuery } from 'src/components/Hooks/useQuery'

const PaperGroup = () => {
  const history = useHistory()
  const { t } = useI18n()
  const scannerT = useScannerI18n()
  const { setSnackbar } = useSnackbarContext()
  const { data: allPapers } = useQuery(getAllQualificationLabel)

  // TODO When ".select" will be used in the query, refacto this
  const categories = [
    ...new Set(
      allPapers.map(paper => {
        const label = get(paper, 'metadata.qualification.label')
        return label
      })
    )
  ]

  const handleClickError = type => {
    setSnackbar({
      open: true,
      duration: 50000,
      message:
        'Problème rencontré lors de la création de votre carte d’identité',
      type
    })
  }

  const handleClick = (type, duration) => {
    setSnackbar({
      open: true,
      duration,
      message: 'Votre carte d’identité a bien été ajoutée à vos papiers',
      type
    })
  }

  return (
    <List>
      <button onClick={() => handleClick('success', 1000)}>
        Open success snackbar
      </button>
      <button onClick={() => handleClickError('error')}>
        Open error snackbar
      </button>
      <ListSubheader>{t('PapersList.subheader')}</ListSubheader>
      <div className={'u-pv-half'}>
        {categories.map((category, idx) => (
          <Fragment key={idx}>
            <ListItem
              button
              onClick={() =>
                history.push({
                  pathname: `/files/${category}`
                })
              }
            >
              <ListItemIcon>
                <Icon icon={IconPdf} size={32} />
              </ListItemIcon>
              <ListItemText primary={scannerT(`items.${category}`)} />
              <ListItemSecondaryAction>
                <IconButton className={'u-pr-1'}>
                  <Icon icon={Right} size={16} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            {idx !== categories.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </Fragment>
        ))}
      </div>
    </List>
  )
}

export default PaperGroup
