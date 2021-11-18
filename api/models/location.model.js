import bookshelf from '../config/bookshelf';

const TABLE_NAME = 'vehicle-location';

/**
 * Location model.
 */
class Location extends bookshelf.Model {

    /**
     * Get table name.
     */
    get tableName() {
        return TABLE_NAME;
    }

    /**
     * Table has timestamps.
     */
    get hasTimestamps() {
        return true;
    }

}

export default Location;