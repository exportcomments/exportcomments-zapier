import packageJson from './package.json' with { type: 'json' };
import zapier from 'zapier-platform-core';

import authentication from './authentication.js';
import exportCreated from './triggers/exportCreated.js';
import exportCompleted from './triggers/exportCompleted.js';
import exportFailed from './triggers/exportFailed.js';
import exportRequeued from './triggers/exportRequeued.js';

export default {
  version: packageJson.version,
  platformVersion: zapier.version,

  authentication: authentication,

  triggers: {
    [exportCreated.key]: exportCreated,
    [exportCompleted.key]: exportCompleted,
    [exportFailed.key]: exportFailed,
    [exportRequeued.key]: exportRequeued,
  },

  searches: {},

  creates: {},

  resources: {},
};
