import { useMusicVideos } from "../hooks/useMusicVideos";
import Loading from "./Loading/Loading";
import VideoCard from "./VideoCard";

const url =
  "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json";

const MusicVideos = () => {
  const { data, error, loading } = useMusicVideos(url);

  return (
    <section className="grid grid-cols-card gap-5">
      {loading && <Loading />}
      {!loading && error && (
        <p className="text-white text-lg">No data found, Try again!</p>
      )}
      {!loading &&
        !error &&
        data &&
        data?.slice(0, 100).map((video) => {
          return (
            <VideoCard
              key={video.id}
              title={video.title}
              artist={video.artist}
              imageUrl={video.image_url}
            />
          );
        })}
    </section>
  );
};

export default MusicVideos;
