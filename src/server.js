import express from "express";
import dotenv from "dotenv";
import indexRouter from "./routes/index.js";
import cors from "cors"

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());

app.use(cors({
  origin: 'http://localhost:5173',
}));

const PORT = process.env.PORT;

app.use("/api", indexRouter);

app.listen(PORT, () => {
  console.log(`rodando server`);
});
