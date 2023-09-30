import { expect, test } from "vitest";
import Pgc from "../src/entities/pgcEntity";

test('Pegar todos os pgcs da tabela e seus relacionamentos', async () => {
    const pgc = await new Pgc()
    const result = await pgc.getPGCs() 
    console.log(result)
})