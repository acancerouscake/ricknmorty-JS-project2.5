function Card(character) {
	const {id, image, name, status, location} = character;
	return (
		<div key={id}>
			<h1>{name}</h1>
			<img src={image} alt={name} />
			<p>{status}</p>
			<p>{location}</p>
		</div>
	);
}

export default Card;
