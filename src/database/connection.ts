import { PrismaClient } from "@prisma/client";

const connection = new PrismaClient();
const pgcDatabase = connection.pgc
const pgcSegundaCamadaDatabase = connection.pgcSegundaCamada;
const pgcTerceiraCamadaDatabase = connection.pgcTerceiraCamada;
const pgcQuartaCamadaDatabase = connection.pgcQuartaCamada;

export {
  connection,
  pgcDatabase,
  pgcQuartaCamadaDatabase,
  pgcSegundaCamadaDatabase,
  pgcTerceiraCamadaDatabase,
};
