import React from "react";

interface Props {
  title: string;
  artist: string;
  imageUrl: string;
}

const VideoCard: React.FC<Props> = ({ title, artist, imageUrl }) => {
  return (
    <figure className="card">
      <img className="card__img" src={imageUrl} alt={title} />
      <figcaption className="card__caption">
        <h2 className="card__caption-artist">{artist}</h2>
        <p className="card__caption-title">{title}</p>
      </figcaption>
    </figure>
  );
};

export default VideoCard;
