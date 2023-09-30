import { PgcInterface } from './../Interfaces/pgcInterface';
import { pgcDatabase } from "../database/connection";

export default class Pgc {
    private pgc = pgcDatabase
    constructor () {
        
    }

    async start() {

    }

    async getPGCs() {
        const pgc = await this.pgc.findMany()
        const result = await pgc
        return result
    }

    async existingInPGC(data: PgcInterface):Promise<boolean> {
        const result = await this.pgc.findFirst({
            where: {
                OR: [{code: data.code}, {name: data.name}]
            }
        })
        if (!result || result.name || result.code) {
            return false
        }
        return true
    }

    async create(data: PgcInterface) {
        const entity = new Pgc()

        if(!await entity.existingInPGC(data)) {
            return new Error('Nao existe nenhum pgc')
        }

        const pgc = await this.pgc.create({data})
        return pgc
    }

    async update() {

    }

    async delete() {

    }
}