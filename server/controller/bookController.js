import mongoose from "mongoose";
import Book from "../model/bookModel.js";

export const createBook = async (req, res) => {
	try {
		const newBook = {
			title: req.body.title,
			author: req.body.author,
			publishYear: req.body.publishYear,
		};

		const book = await Book.create(newBook);
		res.status(201).json(book);
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: error.message });
	}
};

export const getAllBooks = async (req, res) => {
	try {
		const books = await Book.find();
		res.json(books);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};

export const getBook = async (req, res) => {
	const id = req.params.id;
	try {
		const book = await Book.findById(id);
		res.json(book);
	} catch (error) {
		console.log(error);
		res.json(error);
	}
};

export const updateBook = async (req, res) => {
	try {
		if (
			!req.body.title ||
			!req.body.author ||
			!req.body.publishYear
		) {
			res.status(400).send({
				message: "Send All Required Data Fields",
			});
		}

		const id = req.params.id;
		const doc = await Book.findOneAndUpdate({ _id: id }, req.body, {
			new: true,
		});
		res.json(doc);
	} catch (error) {
		console.log({ message: error.message });
		res.status(500).send({ message: error.message });
	}
};

export const deleteBook = async (req, res) => {
	try {
		const id = req.params.id;
		const book = await Book.findOneAndDelete({ _id: id });

		if (!book) {
			res.status(404).json({ message: "Book Not Found" });
		}
		res.status(200).json({ message: "Book Deleted", book: book });
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ message: error.message });
	}
};
