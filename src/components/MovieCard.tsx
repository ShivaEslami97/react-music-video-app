import React from "react";
import { MusicVideo } from "../models/customTypes";

const MovieCard: React.FC<{ items: MusicVideo }> = (props) => {
  return (
    <figure className="card">
      <img
        className="card__img"
        src={props.items.image_url}
        alt={props.items.title}
      />
      <figcaption className="card__caption">
        <h2 className="card__caption-artist">{props.items.artist}</h2>
        <p className="card__caption-title">{props.items.title}</p>
      </figcaption>
    </figure>
  );
};

export default MovieCard;
