import {useState, useEffect} from "react";
import "./App.css";
import "./assets/fonts/get_schwifty.ttf";
import Search from "./components/Search";

export default function App() {
	const [characters, setCharacters] = useState([]);
	const [openCard, setOpenCard] = useState({open: false, character: {}});
	const [pageCount, setPageCount] = useState(1);
	const [searchVal, setSearchVal] = useState("");
	// const [pagination, setPagination] = useState(1);

	const getData = async (page) => {
		try {
			let api = `https://rickandmortyapi.com/api/character/?page=${page}`;
			const response = await fetch(api);
			const data = await response.json();
			setPageCount(data.info.pages);
			setCharacters(data.results);
			console.log(data.results);
		} catch (err) {
			console.log("error", err);
		}
	};

	const onSearchChange = (event) => {
		setSearchVal(event.target.value);
	};

	const handleOpen = (item) => {
		setOpenCard({open: true, character: item});
	};

	// const handleClose = () => {
	// 	setOpenCard({open: false, character: {}});
	// };
	console.log(characters);

	useEffect(() => {
		getData();
	}, []);

	const filterSearch = (page) => {
		return page.name.toLowerCase().includes(searchVal.toLocaleLowerCase());
	};

	return (
		<>
			<Search onChange={onSearchChange} />
			<div className="flex flex-col justify-center items-center ">
				<h1 className="text-center text-3xl font-bold underline">
					Rick and Morty
				</h1>
				<div className="container">
					<div className="flex justify-center flex-row flex-wrap py-2 space-x-2 ">
						{characters &&
							characters
								.filter(filterSearch)
								.map((item, index) => (
									<img
										className="border-5 border-orange-200 duration-4000"
										key={index}
										src={item.image}
										onClick={() => handleOpen(item)}
									/>
								))}
					</div>
				</div>
			</div>
		</>
	);
}
