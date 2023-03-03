import { useCallback, useEffect, useState } from "react";
import { useMusicVideos } from "../hooks/useMusicVideos";
import { MusicVideo } from "../models/customTypes";
import Loading from "./Loading/Loading";
import MusicVideoList from "./MusicVideoList";
import Search from "./Search";

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
  let content = <Loading />;

  if (!loading && error) {
    content = <p className="error">No data found, Try again!</p>;
  }
  if (!loading && !error && filteredMusicVideos) {
    content = (
      <>
        <Search
          genres={genreLabels}
          onFilterChanged={onFilterChanged}
          onSearchChanged={onSearchChanged}
          searchTitle={searchTitle}
        />
        <MusicVideoList
          videos={filteredMusicVideos}
          dataIsDisplayed={dataIsDisplayed}
          isloading={loading}
          error={error}
        />
      </>
    );
  }
  return content;
};

export default MusicVideos;
