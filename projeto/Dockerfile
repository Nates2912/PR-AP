#usamos a versão 22-alpine para ser lee e garantir Node 22.12+
FROM node:22-alpine

WORKDIR /app

#copiamos apenas os arquivos de dependências primeiro (otimiza o cacher)
COPY package.json package-lock.json ./

RUN npm install

#copiamos o restante dos arquivos
COPY . .

#expomos a porta padrão do Vite
EXPOSE 5173

#Comando para rodar o vite com a flag --host
#isso é obrigatorio pra o docker conseguir acessar o servidor interno
CMD ["npm", "run", "dev", "--", "--host"]