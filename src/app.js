import express from 'express'; //Faz o uso da biblioteca que permite a criação do servidor
import cors from 'cors'; // Serve para garantir que o acesso ao servidor não ocorra de forma maliciosa ou indevida
import dotenv from 'dotenv';

dotenv.config();

import cadastroRoutes from "./routes/cadastro.Routes.js"

const app = express(); //Cria o servidor

app.use(cors());
app.use(express.json());

app.use(cadastroRoutes);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running in port: ${port}`)); //Configura para a porta que se deve utilizar 