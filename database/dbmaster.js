import mysql from 'promise-mysql';
export class Connection {
    constructor({ config }) {
        this.config = config;
        this.Pool = mysql.createPool(config);
    }
    async Executequery(query) {
        return this.Pool.query(query);
    }
}
