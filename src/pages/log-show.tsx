
 // lets reach run code when the search changes
 import { useState, useEffect } from 'react';
 
 // Creates the page where users can search for and log new shows.
function LogShow({
  onBack,
  onAddShow
}: {
  onBack: () => void;
  onAddShow: (show: {
    id: number;
    name: string;
    genres: string[];
    image: string | null;
  }) => void;
}) {
  //stores what the user types in the search bar
    const [search, setSearch] = useState('');
  // stores the shpws returned by API
    const [shows, setShows] = useState<any[]>([]);
    // Searches TVmaze whenever the search text changes.
useEffect(() => {
  // Don't search if the search bar is empty.
  if (search.trim() === "") {
    setShows([]);
    return;
  }

  // Sends the search to TVmaze.
  fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(search)}`)
    .then((response) => response.json())
    .then((data) => {
      // Saves the results into our shows state.
      setShows(data);
    })
    .catch((error) => {
      console.error("Error searching shows:", error);
    });
}, [search]);

  return (
    <div className="log-page">

      {/* Button to return to the Options page. */}
      <button className="btn" onClick={onBack}>
        ← Back
      </button>

      {/* Heading for the page. */}
      <h1>Log a New Show</h1>
      <p>Find a show to add to your watchlist.</p>

      {/* now were connecting the search function to see what the user types */}
      <div className="log-search">
        <input
          type="text"
          placeholder="Search shows..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* now the grid displays the search results */}
      <div className="log-grid">
{/* Displays the shows returned by TVmaze. */}
{shows.map((result) => (
  <div className="log-card" key={result.show.id}>

    {/* Displays the show's poster if one exists. */}
    {result.show.image ? (
      <img
        src={result.show.image.medium}
        alt={result.show.name}
      />
    ) : (
      <div className="log-image-placeholder">No Image</div>
    )}

    {/* Displays the show's title. */}
    <h3>{result.show.name}</h3>

    {/* Displays the show's genres. */}
    <p>{result.show.genres.join(", ")}</p>

    {/* Adds the selected show to the user's library. */}
<button
  className="btn"
  onClick={() =>
    onAddShow({
      id: result.show.id,
      name: result.show.name,
      genres: result.show.genres,
      image: result.show.image?.medium || null
    })
  }
>
  Add Show
</button>
  </div>
))}

      </div>
    </div>
  );
}

// Makes this component available to App.tsx.
export default LogShow;
