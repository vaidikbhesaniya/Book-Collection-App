import { Routes, Route } from "react-router-dom";
import CreateBook from "./pages/CreateBooks";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";
import ShowBooks from "./pages/ShowBooks";

export default function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/books/create"
					element={<CreateBook />}
				/>
				<Route
					path="/books/details/:id"
					element={<ShowBooks />}
				/>
				<Route
					path="/books/edit/:id"
					element={<EditBook />}
				/>
				<Route
					path="/books/delete/:id"
					element={<DeleteBook />}
				/>
			</Routes>
		</>
	);
}
