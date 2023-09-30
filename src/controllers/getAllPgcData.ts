
export default class GetAllPgcData {
    
    constructor() {
    }

    execute(name: string) {
        const great = 'Hello world'+ name
        return great
    }

}

const p = new GetAllPgcData()
console.log(p.execute('Rui Marcos'))

