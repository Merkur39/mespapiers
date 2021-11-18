/* global cozy */
import CozyClient from 'cozy-client'

import manifest from '../../manifest.webapp'

/**
 * @typedef {object} GetValues
 * @property {string} app - Category name belonging of the konnector.
 * @property {string} locale - Category name belonging of the konnector.
 */
/**
 * @typedef {object} InitBar
 * @property {string} client - Category name belonging of the konnector.
 * @property {string} root - Category name belonging of the konnector.
 * @property {string} lang - Category name belonging of the konnector.
 * @property {string} appName - Category name belonging of the konnector.
 */

const getDataOrDefault = (data, defaultData) =>
  /^\{\{\..*\}\}$/.test(data) ? defaultData : data

/**
 * @param {object} opt - Options
 * @param {object} opt.app - app object
 * @param {string} opt.locale - locales
 * @returns {object} - App values
 */
export const getValues = ({ app, locale }) => {
  // Default data will allow to display correctly the cozy-bar
  // in the standalone (without cozy-stack connexion)
  const defaultValues = {
    appIconDefault: require('src/targets/vendor/assets/icon.svg'),
    appNamePrefixDefault: manifest.name_prefix,
    appNameDefault: manifest.name,
    appLocaleDefault: 'en'
  }

  return {
    appName: getDataOrDefault(app.name, defaultValues.appNameDefault),
    appNamePrefix: getDataOrDefault(
      app.prefix,
      defaultValues.appNamePrefixDefault
    ),
    iconPath: getDataOrDefault(app.icon, defaultValues.appIconDefault),
    lang: getDataOrDefault(locale, defaultValues.appLocaleDefault)
  }
}

/**
 * @param {CozyClient} client - CozyClient instance
 */
export const initBar = ({ client, root, lang, appName }) => {
  const { appNamePrefix, iconPath } = getValues(JSON.parse(root.dataset.cozy))

  cozy.bar.init({
    appName,
    appNamePrefix,
    cozyClient: client,
    iconPath,
    lang,
    replaceTitleOnMobile: false
  })
}
