import "./App.css";

interface Genre {
  id: number;
  name: string;
}

interface MusicVideo {
  id: number;
  artist: string;
  title: string;
  release_year: number;
  genre_id: number;
  image_url: string;
}

interface MusicVideoWithGenre extends MusicVideo {
  genre: string;
}

interface Props {
  apiUrl: string;
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline text-red-600">
          Simple React Typescript Tailwind Sample
        </h1>
      </header>
    </div>
  );
};

export default App;
