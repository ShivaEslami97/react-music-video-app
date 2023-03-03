import { useCallback, useEffect, useState } from "react";
import { useMusicVideos } from "../hooks/useMusicVideos";
import { MusicVideo } from "../models/customTypes";
import Loading from "./Loading/Loading";
import Search from "./Search";
import VideoCard from "./VideoCard";

const url =
  "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json";

const MusicVideos = () => {
  const { data, error, loading, genreLabels } = useMusicVideos(url);
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [filteredGenreIds, setFilteredGenreIds] = useState<number[]>([]);
  const [filteredMusicVideos, setFilteredMusicVideos] = useState<MusicVideo[]>(
    []
  );
  const onFilterChanged = useCallback((filterdGenres: number[]) => {
    setFilteredGenreIds(filterdGenres);
  }, []);
  const onSearchChanged = useCallback((searchedTitle: string) => {
    setSearchTitle(searchedTitle);
  }, []);

  useEffect(() => {
    let filterdData = [...data];
    if (searchTitle) {
      filterdData = filterdData.filter((musicVideo) => {
        return String(musicVideo.title).includes(searchTitle);
      });
    }
    if (filteredGenreIds.length) {
      filterdData = filterdData.filter(
        (musicVideo) =>
          musicVideo.genre && filteredGenreIds.includes(musicVideo.genre?.id)
      );
    }
    setFilteredMusicVideos(filterdData);
  }, [data, filteredGenreIds, searchTitle]);

  const dataIsDisplayed = !loading && !error && filteredMusicVideos.length > 0;

  return (
    <>
      {dataIsDisplayed && (
        <Search
          genres={genreLabels}
          onFilterChanged={onFilterChanged}
          onSearchChanged={onSearchChanged}
          searchTitle={searchTitle}
        />
      )}
      <section className="grid grid-cols-card place-items-center gap-5 md:place-items-start">
        {loading && <Loading />}
        {!loading && error && (
          <p className="error">No data found, Try again!</p>
        )}
        {dataIsDisplayed &&
          filteredMusicVideos?.slice(0, 100).map((video) => {
            return (
              <VideoCard
                key={video.id}
                title={video.title}
                artist={video.artist}
                imageUrl={video.image_url}
              />
            );
          })}
        {!loading && !error && filteredMusicVideos.length === 0 && (
          <p className="error">No data found!</p>
        )}
      </section>
    </>
  );
};

export default MusicVideos;
