import axios from "axios";
import { test } from "vitest";

test.skip('Criar uma subcamada do pgc', async () => {
    const result = await axios.post('http://localhost:8081/subcamada/1', {
        code: '11',
        description: 'Imobilizações Corpóreas',
        camadaAcimaID: Number(1) 
    })

    console.log(result)
})