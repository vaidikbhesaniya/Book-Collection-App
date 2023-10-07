import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, DB_URL } from "./config.js";
import bookRouter from "./routes/bookRouter.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use("/books", bookRouter);
app.use("*", (req, res) => {
	res.sendFile(__dirname + "/dist/index.html");
});

mongoose
	.connect(DB_URL)
	.then(() => {
		console.log("Database Connected");
		app.listen(PORT, () => {
			console.log(`Server started on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.error("Error connecting to the database:", err.message);
	});
