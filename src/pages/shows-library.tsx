
// Creates the Library page where users can view their saved shows.
function ShowsLibrary({
  onBack,
  savedShows,
  onRemoveShow
}: {
  onBack: () => void;
  savedShows: {
    id: number;
    name: string;
    genres: string[];
    image: string | null;
  }[];
  onRemoveShow: (showId: number) => void;
}) {
  return (
    <div className="library-page">

      {/* Takes the user back to the Options page. */}
      <button className="btn" onClick={onBack}>
        ← Back
      </button>

      {/* Library heading. */}
      <h1>My Library</h1>

      {/* Displays all the shows the user has added. */}
      <div className="show-grid">

        {savedShows.map((show) => (
          <div className="show-card" key={show.id}>

            {/* Displays the show's poster if one exists. */}
            {show.image ? (
              <img src={show.image} alt={show.name} />
            ) : (
              <div className="show-image-placeholder">No Image</div>
            )}

            {/* Displays the show's title and genres. */}
            <h3>{show.name}</h3>
            <p>{show.genres.join(", ")}</p>
            <p>Watchlist</p>
            {/* Button to remove the show from the library. */}
            <button className="btn" onClick={() => onRemoveShow(show.id)}>
              Remove Show
            </button>

          </div>
        ))}

        {/* Displays a message if the library is empty. */}
        {savedShows.length === 0 && (
          <p>You haven't added any shows yet!</p>
        )}

      </div>
    </div>
  );
}

// Makes this component available to App.tsx.
export default ShowsLibrary;
