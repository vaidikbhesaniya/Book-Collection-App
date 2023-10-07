import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema(
	{
		title: { type: String, required: true, unique: true },
		author: { type: String, required: true },
		publishYear: { type: Number, required: true },
	},
	{
		timestamps: true,
	}
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
