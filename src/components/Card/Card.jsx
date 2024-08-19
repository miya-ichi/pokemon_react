import React from "react";
import "./Card.css";

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {pokemon.types.map((type) => {
          return (
            <div key={type.type.name}>
              <span className="typeName">{type.type.name}</span>
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p>重さ：{pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p>高さ：{pokemon.height}</p>
        </div>
        <div className="cardData">
          <div>
            とくせい
            {pokemon.abilities.map((ability) => {
              return (
                <div key={ability.ability.name}>
                  <span>{ability.ability.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;