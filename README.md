# Aplicativo de PGC Online

## Casos de Uso
### Criar Um PGC
#### Autor: **Adminitrador do Sistema**
- Pegar todas as instancias do PGC
  - Mostrar todas as camadas do PGC (**Da camada mais interna a camada mais externa**)
  - Pegar todas as camadas abaixo da camada a ser consultada


- Criar uma nova conta pgc {name, description, code}
  - Verificar se existe uma instancia desse pgc usando o code, e o name
  - Ter a possibilidade criar camadas no pgc (exemplo):
  - **11 Meios Fixos**
    - 11.1 Imobilizações Corpóreas
      - 11.1.1 Edifícios
      - 11.1.2 Terrnos
    - 11.2 Imobilizações Incorpóreas
      - 11.2.1 Alvara
  
### Actualizar Um PGC
#### Autor: **Adminitrador do Sistema**

- Actualizar as Instância do PGC
  - Verificar se existe, caso não exista essa instancia a ser actualizada, cria a instancia do pgc
  - Poder Actualizar uma instância ou camada mais interna do PGC

### Deletar Um PGC
#### Autor: **Adminitrador do Sistema**

- Deletar Instância do PGC
  - Não poder deletar uma camada pai, se ele tiver filhos
  - Deletar camadas filhos mesmo se tiver uma camada pai


## Rodar Projecto

Para este projecto estou usando o gerenciador de dependência **PNPM** que é um gerenciador de dependências muito rápido.

Execute o comando `pnpm install` para instalar as dependências do projeto.

Para rodar o projecto, comece por executar o `pnpm dev:db` para rodar as migrations para o banco de dados, **(Atenção: Deves actualizar ter um arquivo .`env` a informar a url para o Banco de dadaos, estou usando o banco de dados PostgresSQL)**, depois das migrations estarem prontas, execute o comando `pnpm dev` para rodar o servidor.