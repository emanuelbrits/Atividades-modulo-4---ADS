# Use a imagem oficial do Node.js como base
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos para o diretório de trabalho
COPY . .

# Exponha uma porta (por exemplo, 3000) que sua aplicação irá ouvir
EXPOSE 3000

# Comando para iniciar sua aplicação
CMD ["npm", "start"]
