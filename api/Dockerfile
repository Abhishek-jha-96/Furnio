FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

CMD ["sh", "-c", "npx prisma migrate dev && npm run start:dev --host 0.0.0.0"]
