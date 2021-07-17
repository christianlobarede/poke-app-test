import React from "react";

const PokemonCard = (props) => {
  const PokeStyles = {
    border: "1px solid black",
    backgroundColor: "" + props.bg + "",
    width: "200px",
    margin: "auto",
    textAlign: "center",
  };

  const pokeImgname =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/";
  const pokeImgNumber = props.id;
  const pokeImg = pokeImgname + pokeImgNumber + ".png";

  return (
    <div className="pokemoncard" style={PokeStyles}>
      <p>{props.name}</p>
      <p>{props.id}</p>
      <p>{props.types}</p>
      <img src={pokeImg} />
    </div>
  );
};

export default PokemonCard;
