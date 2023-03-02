import { Genre } from "../models/customTypes";

interface Props {
  onFilterChanged: (filterdGenres: number[]) => void;
  onSearchChanged: (searchedTitle: string) => void;
  searchTitle?: string;
  genres: Genre[];
}

const Search: React.FC<Props> = ({
  genres,
  onFilterChanged,
  onSearchChanged,
  searchTitle,
}) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChanged(e.target.value);
  };
  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const genreIds = Array.from(e.target.selectedOptions, (option) =>
      parseInt(option.value)
    );
    onFilterChanged(genreIds);
  };

  return (
    <div className="p-3">
      <form>
        <label>
          Title:
          <input type="text" value={searchTitle} onChange={handleTitleChange} />
        </label>
        <label>
          Genre:
          <select multiple={true} onChange={handleGenreChange}>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default Search;
