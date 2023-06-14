//* This is a special Next.js file that has to be named like this, and be located in the root project folder.
//* It exports a JavaScript object with the Node.js export syntax (CJS).
//* It is used to set various configuration options.
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
const nextConfig = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'ariepaulus',
        mongodb_password: 'bMAqaXNdg5CJTrsf',
        mongodb_clustername: 'cluster0.denk80d.mongodb.net',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'ariepaulus',
      mongodb_password: 'bMAqaXNdg5CJTrsf',
      mongodb_clustername: 'cluster0.denk80d.mongodb.net',
      mongodb_database: 'my-site',
    },
  };
};

module.exports = nextConfig;
