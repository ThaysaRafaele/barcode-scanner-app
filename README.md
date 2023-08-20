# Documentação do Aplicativo "PayNoContact"

## Visão Geral
O aplicativo "PayNoContact" é uma plataforma que permite aos usuários uma experiência para comprar sem precisar ter contato com funcionários, e saber em tempo real o valor de sua compra. Ao ler o código e adicionar os produtos diretamente ao seu carrinho, e no final da compra apenas fazer conferencia dos itens e empacotamento para então finalizar o pagamento.

## Funcionalidades Principais
Por enquanto temos
* login, 
* Leitor de código de barras, 
* listagem de produto fictício, 
* tela para busca de produtos inserindo código de barras manualmente.


## Uso
1. Inicie o aplicativo pela url https://barcode-scanner-app-f4ts.vercel.app/
2. Faça login
3. Após login o leitor de código de barras será aberto. Escaneie o código do produto.
4. a lista de produtos lidos deverá aparecer abaixo do leitor.

## Dependências
- [Lista de bibliotecas externas ou serviços que o aplicativo depende]

## Configuração


## Estrutura de Diretórios
PayNoContact\barcode-scanner-app<br>
|_...<br>
|_public<br>
|_src<br>
....|_Assets  
........|_Imagens    
....|_Components  
........|_BarcodeGenerator  
........|_BottomMenu  
........|_Header  
........|_ProductInfo  
........|_ProductSearchPage      
....|_Pages  
........|_Login  
....|_Routes  
....|_App.tsx  
....|_Index.tsx
|_package.json
|_tsconfig.json


## Fluxo de Trabalho do Desenvolvimento

### Preparação Inicial:

Certifique-se de ter o Node.js instalado. Você pode baixá-lo no site oficial: https://nodejs.org/
Instale o Git em seu sistema: https://git-scm.com/
Instale o Visual Studio Code: https://code.visualstudio.com/

### Clonar o Repositório:

https://github.com/ThaysaRafaele/barcode-scanner-app

### Configuração do Ambiente:

Certifique-se de que qualquer arquivo de configuração necessário para o projeto esteja configurado adequadamente. Isso pode incluir arquivos de configuração para o Babel, ESLint, TypeScript etc., dependendo das tecnologias que você está usando.

### Rodando o Projeto:

npm start
yarn start


## Licença
[Indicação da licença sob a qual o aplicativo é distribuído]

## Contato
thaysarafaele@gmail.com
