import { useMusicVideos } from "../hooks/useMusicVideos";
import Loading from "./Loading/Loading";
import MovieCard from "./MovieCard";

const url =
  "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json";

const MusicVideos = () => {
  const { data, error, loading } = useMusicVideos(url);

  return <section className="grid grid-cols-card gap-5"></section>;
};

export default MusicVideos;
