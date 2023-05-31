import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found!</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            images={pet.images}
            breed={pet.breed}
            animal={pet.animal}
            name={pet.name}
            key={pet.id}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      )}
    </div>
  );
};
export default Results;
