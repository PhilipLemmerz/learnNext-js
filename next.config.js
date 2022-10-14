const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
// durch PHASE_DEVELOPMENT_SERVER prüfen wir ob wir den Dev Server gestartet haben
// damit können wir jeweils unterschiedliche env Variablen setzen.

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        envVar1: 'testDev',
        envVar2: 'test2Dev'
      }
    }
  } else {
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        envVar1: 'testDeploy',
        envVar2: 'test2Deploy'
      }
    }
  }
}

// Die env Variables lesen wir aus durch process.env.name



