'use strict';

module.exports = {
    DB_MAX_AVAILABLE_PAGE_SIZE: 65536, // helps to speed up queries
    DB_SUITES_TABLE_NAME: 'suites',
    DB_BROWSERS_TABLE_NAME: 'browsers',
    DB_TYPES: {
        int: 'INT',
        text: 'TEXT'
    }
};
