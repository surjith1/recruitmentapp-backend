import express from "express";
import cors from "cors";
import env from "dotenv";
import { userRoutes } from "./routes/users.js";
import { authRoutes } from "./routes/auth.js";
import { dbConnection } from "./db.js";
import { jobApplicationRouter } from "./routes/applicationList.js";

const app = express();
env.config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
// const createConection = async () => {
//   const client = new MongoClient(MONGO_URL);
//   await client.connect();
//   console.log("Mongo Db is Connected ✌ 😊 👌.");
//   return client;
// };
// export const client = await createConection();

//database Connection
dbConnection();

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", jobApplicationRouter);

app.get("/", (req, res) => {
  res.send(
    `Welcome to Hall Booking API in Port ${PORT} and endpoint is "/api/pinterest/dashboard-home"`
  );
});

app.listen(PORT, () => console.log(`Local host running on ${PORT}`));
