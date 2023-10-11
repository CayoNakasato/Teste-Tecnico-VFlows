# Formulário de Cadastro de Fornecedores e Produtos
Este é um projeto de exemplo para criar um formulário de cadastro de fornecedores e produtos. O objetivo deste desafio é avaliar seus conhecimentos técnicos, sua capacidade de lidar com requisitos complexos e sua habilidade em pensar em soluções inovadoras. O projeto deve seguir as seguintes diretrizes:

## Requisitos do Projeto
- HTML 5: Utilizeado a versão 5 do HTML para criar a estrutura do formulário.
- ECMA-6 JavaScript: usado o ECMAScript 6 para o desenvolvimento do código JavaScript.
- CSS: estilo do formulário.
## Funcionalidades do Formulário
### Campos de Cadastro de Fornecedores:
 Pode se criar um fornecedor, atribuindo esses valores:
 - Razão Social (obrigatório)
 - Nome Fantasia (obrigatório)
 - CNPJ (obrigatório)
 - Inscrição Estadual (opcional)
 - Inscrição Municipal (opcional)
 - Endereço (obrigatório, preenchido automaticamente usando API via CEP)
 - Nome da Pessoa de Contato (obrigatório)
 - Telefone (obrigatório)
 - E-mail (obrigatório)

### Tabela de Produtos:
 Pode se criar produtos onde se deve passar essas informações: 
 - Descrição do Produto (obrigatório)
 - Unidade de Medida (obrigatório)
 - Quantidade em Estoque (obrigatório)
 - Valor Unitário (obrigatório)
 - Valor Total (calculado automaticamente multiplicando Valor Unitário pela Quantidade em Estoque)


### Tabela de Anexos:

É possível carregar arquivos para se salvar junto com o fornecedor, podendo baixar o arquivo e deletar o prório.

Há botões para excluir e visualizar os documentos anexados.
Funcionalidades Adicionais:

 - Ao clicar em "Salvar Fornecedor", um modal de loading deve é exibido.

 - O JSON de resultadodo fornecedor é exibido no console do navegador.

## Como Executar o Projeto
Clone o repositório em sua máquina local:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

Abra o arquivo index.html em seu navegador web.

Preencha o formulário de cadastro com os dados necessários.

Ao clicar em "Salvar Fornecedor", o modal de loading será exibido e o JSON formatado será gerado no console.

Este projeto foi criado como um exemplo para demonstrar habilidades em HTML, JavaScript e CSS e manipulação de dados.