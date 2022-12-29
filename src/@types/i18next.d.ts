/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next'

import type common from '@locales/en/common.json'
import type navigation from '@locales/en/navigation.json'
import type rebranding from '@locales/en/rebranding.json'

interface I18nNamespaces {
  common: typeof common
  navigation: typeof navigation
  rebranding: typeof rebranding
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: I18nNamespaces
  }
}
