import React from "react";

const Searchbar = ({onChange}) => {
	return (
		<div
			className="search-input"
			style={{
				display: "flex",
				justifyContent: "center",
				margin: "3rem",
				borderColor: "#FFEBCD",
				borderRadius: "10px",
			}}
		>
			<div className="w-px500 max-w-full border-orange-100 bg-stone-100">
				<input
					id="message"
					type="text"
					name="filterSearch"
					className="text-red-200 w-full "
					placeholder="filter Search"
					onChange={onChange}
				></input>
			</div>
		</div>
	);
};

export default Searchbar;
