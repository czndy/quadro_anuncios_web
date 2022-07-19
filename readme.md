# Passo a passo para configurar git:

## Requerimentos:
Download do Node.js (versão LTS): https://nodejs.org/en/download/
Download do git: https://git-scm.com/downloads
Download do cli (gh): https://cli.github.com/


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
DIgite o seguinte comando:
```
git init
```

Agora vá até o projeto no GitHub que deseja e copie a URL dele.
No caso, é a seguinte URL: https://github.com/czndy/quadro_anuncios_web
Volte ao PowerShell (ou CMD) e dê o seguinte comando:
```
git remote add origin git@github.com:czndy/quadro_anuncios_web.git
git branch -M 'master'
git push -u -f origin master
```
OBS: -u seta a origem configurada lá em cima como padrão. -f significa force, nesse primeiro commit usei pra sobrescrever o readme.me que já tinha no github

SEMPRE DAR PUSH NO GIT ANTES DE MEXER NO CÓDIGO