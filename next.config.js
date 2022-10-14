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
        envVar2: 'test2Deploy',
        NEXTAUTH_SECRET: 'mysupersecretsecret', // wichtig damit authentication funktioniert in nextAuth -> Muss im [...nextauth].js angegeben werden
        NEXTAUTH_URL: 'http://localhost:3000/' // muss beim deployment angegeben werden.
        // Achtung bei Vercel Hosting -> die VERCEL_URL Variable sezten.
      }
    }
  }
}

// Die env Variables lesen wir aus durch process.env.name



