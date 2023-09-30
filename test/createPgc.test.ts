import { expect, test } from "vitest";
import Pgc from "../src/entities/pgcEntity";
import axios from "axios";

test('Criar um novo arquivo no pgc', async () => {
    const data = {
        name: 'Meios Fixos e Investimentos',
        code: '11',
        description: 'Correspondem aos bens que uma derteminada entidade possui'
    }
    const result = await axios.post('http://localhost:8081/add-pgc', data)
    console.log(result.data);
    
    // expect(result).toContain(data)
})