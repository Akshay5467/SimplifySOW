import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // default baseUrl (QA)
    baseUrl: 'https://qa-account.simplifysandbox.net',

    env: {
      name: 'qa',
      qa: 'https://qa-account.simplifysandbox.net',
      uat: 'https://uat-account.simplifysandbox.net',
      preprod: 'https://preprod-account.simplifysandbox.net'
    },

    setupNodeEvents(on, config) {
      // pick env by CLI: --env name=uat
      const envName = config.env.name || 'qa'
      config.baseUrl = config.env[envName] || config.baseUrl
      return config
    }
  }
})
