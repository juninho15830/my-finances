# My-finances
<p> App de gestão finaceira full stack </p>

<h3> Tecnologias Usadas</h3>
<p> Nextjs, Tailwind CSS, Typescript, Nodejs, Prisma, SQL Lite</p>

<p>Como ainda não fiz o deploy desta aplicação, você pode ver como ficou clicando no link do video do Youtube</p>
<a href="https://youtu.be/n6KKB5nYZZQ?si=Bq9JqAB6SopfqhUk">Apresentação do projeto no Youtube</a>
<br>
<br>

<img src="https://i.imgur.com/BgD2WMr.png" alt="My-finances">
<br>
<br>

# Como instalar

<h3>1- clonar o repositório:</h3>

<img src="https://i.imgur.com/WMYXcuz.png" alt="Imagem 1" width="600px">
<br>

<p>Vai ter duas pastas:</p>
<p>A pasta “web” é onde fica o front-end em Nextjs</p>
<p>A pasta “server” é onde fica o back-end em Nodejs</p>
<br>
<br>

<h3>2-criar GitHubOauth para autenticação de usuário:</h3>

<p>No canto superior direito do seu GitHub clique na foto do perfil e vá em "settings"</p>
<img src="https://i.imgur.com/I66fvu7.png" alt="Imagem 2" width="600px">
<br>
<br>

<p>Agora no canto inferior esquerdo clique em "<> Developer Settings" </p>
<img src="https://i.imgur.com/qm4EHPL.png" alt="Imagem 3" width="600px">
<br>
<br>
  
<p>Clique em "OAuth Apps"</p>
<img src="https://i.imgur.com/60vAbjO.png" alt="Imagem 4" width="450px">
<br>
<br>

<p>Clique em "register a new application"</p>
<img src="https://i.imgur.com/DPUrAZy.png" alt="Imagem 5"width="400px">
<br>
<br>

<p>Preencha o formulário como na imagem abaixo, de um nome de sua escolha em seguida clique em register</p>
<img src="https://i.imgur.com/UZDw9v8.png" alt="Imagem 6" width="500px">
<br>
<br>

<p>Vai aparecer uma tela com um código Client ID, logo abaixo deste código tem um botão “generate a new client secret” clique nele.
Coloque sua senha e confirme para criar o Client Secret</p>
<p>Estes códigos vão ser usados nas variáveis ambiente da aplicação para fazer login de usuário</p>
<img src="https://i.imgur.com/dVgFfIB.png" alt="Imagem 7" width="700px">
<br>
<br>

<h3>3-Criar a variável ambiente no front-end:</h3>

<p></p>Abra a pasta “web” com o VScode ou outra IDE de sua preferência,na pasta raiz crie um arquivo chamado “.env.local” e passe o comando:</p>

```
#GITHUB#GITHUB

#Este é o Client ID que criei como exemplo coloque o seu Client ID do github OAuth entre as aspas.
NEXT_PUBLIC_GITHUB_CLIENT_ID="a3e2fa3fe02c5aea0c77" 
```

<p>Veja na imagem abaixo:</p>
<img src="https://i.imgur.com/2kEr5MG.png" alt="Imagem 8" width="600px">

<p>Em seguida abra o terminal na pasta raiz “web” e faça um “npm install” para instalar as dependências. </p>

```
npm install
```

<br>

<h3>4-Criar a variável ambiente no back-end:</h3>

<p>Abra a pasta “server” com o VScode ou outra IDE de sua preferência, na pasta raiz crie um arquivo chamado “.env” e passe o comando:</p>

```
DATABASE_URL="file:./dev.db"

# GitHub

#Coloque o seu Client ID entre as aspas
GITHUB_CLIENT_ID="a3e2fa3fe02c5aea0c77"

#Coloque o seu Client Secrets entre as aspas
GITHUB_CLIENT_SECRET="66187c3f6267f9ae405b6e98dacd1028693ef7ef"
```
<p>Veja na imagem abaixo:</p>
<img src="https://i.imgur.com/bqRK5oY.png" alt="Imagem 9" width="600px">

<p>Em seguida abra o terminal na pasta raiz “server” e faça um “npm install” para instalar as dependências. </p>

```
npm install
```

<br>

<h3>5-Rodar o projeto:</h3>

<p>Primeiro no back-end “server” rode o comando:</p>

```
npm run dev
```

<br>

<p>Se quiser ter acesso as tabelas do banco de dados para fazer alterações manualmente rode o seguinte comando em outro terminal no back-end</p>

```
npx prisma studio
```

<br>

<p>Em seguida no front-end “web” rode o comando:</p>

```
npm run dev
```

<br>

<p>Agora basta abrir o navegador com a url: http://localhost:3000 e testar.</p>

