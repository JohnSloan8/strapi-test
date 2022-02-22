'use strict';

/**
 * listen router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::listen.listen');
