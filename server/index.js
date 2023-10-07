import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRouter from "./routes/bookRouter.js";
import dotenv from "dotenv";
const app = express();

app.use(dotenv.config());
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use("/books", bookRouter);
app.use("*", (req, res) => {
	res.sendFile(__dirname + "/dist/index.html");
});

mongoose
	.connect(process.env.DB_URL)
	.then(() => {
		console.log("Database Connected");
		app.listen(process.env.PORT, () => {
			console.log(`Server started on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.error("Error connecting to the database:", err.message);
	});
