interface VideoResponse {
  genres: Genre[];
  videos: {
    id: number;
    artist: string;
    title: string;
    release_year: number;
    genre_id: number;
    image_url: string;
  }[];
}

interface Genre {
  id: number;
  name: string;
}

interface MusicVideo {
  id: number;
  artist: string;
  title: string;
  release_year: number;
  genre?: Genre;
  image_url: string;
}

export type { VideoResponse, Genre, MusicVideo };
