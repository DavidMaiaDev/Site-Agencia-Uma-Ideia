# Etapa de construção da aplicação
FROM node:18-alpine AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copie os arquivos de configuração e dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copie o restante dos arquivos da aplicação
COPY . .

# Execute o build da aplicação
RUN npm run build

# Etapa de produção com Nginx
FROM nginx:alpine

# Copie os arquivos da aplicação do estágio de build para o diretório padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponha a porta que o Nginx usa
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
