import axios from "axios";
import { test } from "vitest";

test('Pegar todos os pgcs da tabela e seus relacionamentos', async () => {
    const result = await axios.get('http://localhost:8081/pgc')
    console.log(result.data)
    return result.data
})