'use strict';

/**
 *  listen controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::listen.listen');
