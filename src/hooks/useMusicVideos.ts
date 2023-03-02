import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { MusicVideo, VideoResponse } from "../models/customTypes";
import { toast } from "react-toastify";

export const useMusicVideos = (url: string) => {
  const [data, setData] = useState<MusicVideo[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response: AxiosResponse<VideoResponse> = await axios.get(url);
        let videosWithGenre: MusicVideo[] = [];
        videosWithGenre = response.data.videos.map((video) => {
          const genre = response.data.genres.find((genre) => {
            return genre.id === video.genre_id;
          });
          return {
            id: video.id,
            artist: video.artist,
            title: video.title,
            release_year: video.release_year,
            genre: genre,
            image_url: video.image_url,
          };
        });

        setData(videosWithGenre);
        console.log(videosWithGenre);
      } catch (error) {
        if (error instanceof Error) {
          toast.error("Something went wrong!");
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};
