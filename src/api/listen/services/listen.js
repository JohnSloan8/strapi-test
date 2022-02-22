'use strict';

/**
 * listen service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::listen.listen');
