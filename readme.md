# Passo a passo para criar git: 
download do git
criei repositório no github
abri repositório, cliquei em code e dps em SSH

no windows criei uma pasta e criei um arquivo 'readme.md' escrito 'teste' no conteúdo (não façam isso senão vai sobrescrever esse readme.me)

obs: eu coloquei o mesmo nome de usuário do meu github no user.name e o mesmo email do github no user.email do comando abaixo

## CMD:

```
git config --global user.name "Your name here"
git config --global user.email "your_email@example.com"

cd D:\TI\Projetos pessoais\quadro_anuncios_web
```
##### (vcs colocam a url de onde vcs vão deixar o projeto no pc de vcs)
```
git init

git add -A

git commit -m "commit inicial"
```

##### abri repositório no github, cliquei em code e dps em SSH
##### copiei oq apareceu lá git@github.com:czndy/quadro_anuncios_web.git
##### voltei pro cmd e dei o seguinte comando
```
git remote add origin git@github.com:czndy/quadro_anuncios_web.git

git push -u -f origin master
```
observação: -u seta a origem configurada lá em cima como padrão. -f significa force, nesse primeiro commit usei pra sobrescrever o readme.me que já tinha no github