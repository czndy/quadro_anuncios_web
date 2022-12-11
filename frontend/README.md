# Passo a passo para configurar git:

## Requerimentos:
- Download do Node.js (versão LTS): https://nodejs.org/en/download/
- Download do git: https://git-scm.com/downloads
- Download do cli (gh): https://cli.github.com/

## CMD:

- OBS 1: Coloque o mesmo nome de usuário do seu github no user.name e o mesmo email do seu github no user.email dos primeiros dois comandos
- OBS 2: no terceiro comando abaixo, escolha as seguintes opções: Github.com > HTTPS > (digite y e dê enter) > Login with a web browser > (dê enter)

Copie o código que apareceu no CMD ao lado de "First copy your one-time code:" e cole na janela que abriu do github.

Clique em Continuar, depois em Autorizar Github - e vc já estará autenticado. 
```
git config --global user.name "Your name here"
git config --global user.email "your_email@example.com"
gh auth login
```


Após isso, abra a pasta onde vc guardará o projeto, segure SHIFT e clique com o botão direito em uma parte vazia dentro da pasta.

Selecione "Abrir janela do PowerShell aqui" (ou CMD) 

Digite o seguinte comando:
```
git init
```

Agora vá até o projeto no GitHub que deseja e copie a URL dele.

No caso, é a seguinte URL: https://github.com/czndy/quadro_anuncios_web

Volte ao PowerShell (ou CMD) e dê o seguinte comando:
```
git remote add origin https://github.com/czndy/quadro_anuncios_web
git branch -M 'master'
git pull https://github.com/czndy/quadro_anuncios_web master
git push -u -f origin master
```
OBS: -u seta a origem configurada lá em cima como padrão. -f significa force, nesse primeiro commit usei pra sobrescrever o readme.me que já tinha no github

# Exemplo de como trabalhar com GIT:
## Antes de começar a mexer no código:
```
git fetch
git pull
git status
```
Se o resultado for o seguinte, você pode começar a trabalhar no código:
```
On branch master
Your branch is up to date with 'origin/master'.
nothing to commit, working tree clean
```

## Depois de terminar de mexer no projeto:
Verifique se os arquivos que vc modificou estão corretos
```
git status
```
Dê o commit com a descrição e em seguida dê o push para enviar as alterações pro git.
```
git commit -a -m "Coloque aqui a descrição do que vc mexeu no projeto - entre aspas duplas"
git push
```

Alternativa visual para GIT: https://sourcetreeapp.com/






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


