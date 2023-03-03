import React from "react";
import { MusicVideo } from "../models/customTypes";
import DataNotFound from "./DataNotFound";
import VideoCard from "./VideoCard";

interface Props {
  videos: MusicVideo[];
  isloading: boolean;
  error: boolean;
  dataIsDisplayed: boolean;
}

const MusicVideoList: React.FC<Props> = (props) => {
  const { videos, isloading, error, dataIsDisplayed } = props;
  return (
    <section className="grid grid-cols-card place-items-center gap-5 md:place-items-start">
      {dataIsDisplayed &&
        videos?.slice(0, 100).map((video) => {
          return (
            <VideoCard
              key={video.id}
              title={video.title}
              artist={video.artist}
              imageUrl={video.image_url}
            />
          );
        })}
      {!isloading && !error && videos.length === 0 && (
        <DataNotFound>No data found!</DataNotFound>
      )}
    </section>
  );
};

export default MusicVideoList;
