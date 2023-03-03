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
    <div className="py-4">
      <form className="grid grid-cols-2 gap-4">
        <div className="form__field">
          <label htmlFor="title" className="text-white">
            Title:
          </label>
          <input
            className="form__input"
            type="text"
            id="title"
            value={searchTitle}
            placeholder="Search by title"
            onChange={handleTitleChange}
          />
        </div>
        <div className="form__field">
          <label className="text-white">Genre:</label>
          <select
            className="form__select"
            multiple={true}
            onChange={handleGenreChange}
          >
            {genres.map((genre) => (
              <option
                key={genre.id}
                className="form__select-option"
                value={genre.id}
              >
                {genre.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Search;
