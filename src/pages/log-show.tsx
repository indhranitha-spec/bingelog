
 // Creates the page where users can search for and log new shows.
function LogShow({ onBack }: { onBack: () => void }) {
  return (
    <div className="log-page">

      {/* Button to return to the Options page. */}
      <button className="btn" onClick={onBack}>
        ← Back
      </button>

      {/* Heading for the page. */}
      <h1>Log a New Show</h1>
      <p>Find a show to add to your watchlist.</p>

      {/* Search bar placeholder. Search functionality will be added later. */}
      <div className="log-search">
        <input type="text" placeholder="Search shows..." />
      </div>

      {/* Grid that displays placeholder show results. */}
      <div className="log-grid">

        {/* Placeholder result 1. */}
        <div className="log-card">
          <div className="log-image-placeholder">Image</div>
          <h3>Show Title</h3>
          <p>Year • Genre</p>
          <button className="btn">Add Show</button>
        </div>

        {/* Placeholder result 2. */}
        <div className="log-card">
          <div className="log-image-placeholder">Image</div>
          <h3>Show Title</h3>
          <p>Year • Genre</p>
          <button className="btn">Add Show</button>
        </div>

        {/* Placeholder result 3. */}
        <div className="log-card">
          <div className="log-image-placeholder">Image</div>
          <h3>Show Title</h3>
          <p>Year • Genre</p>
          <button className="btn">Add Show</button>
        </div>

      </div>
    </div>
  );
}

// Makes this component available to App.tsx.
export default LogShow;
