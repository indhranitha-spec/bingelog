function ShowsLibrary({ onBack }: { onBack: () => void }) {
  return (
    <div className="library-page">

      {/* Takes the user back to the Options page. */}
      <button className="btn" onClick={onBack}>
        ← Back
      </button>

      {/* Library heading. */}
      <h1>My Library</h1>

      {/* Holds the show cards in a grid. */}
      <div className="show-grid">

        {/* Placeholder for the first show. */}
        <div className="show-card">
          <div className="show-image-placeholder">Image</div>
          <h3>Show Title</h3>
          <p>Genre</p>
          <p>Status</p>
        </div>

        {/* Placeholder for the second show. */}
        <div className="show-card">
          <div className="show-image-placeholder">Image</div>
          <h3>Show Title</h3>
          <p>Genre</p>
          <p>Status</p>
        </div>

        {/* Placeholder for the third show. */}
        <div className="show-card">
          <div className="show-image-placeholder">Image</div>
          <h3>Show Title</h3>
          <p>Genre</p>
          <p>Status</p>
        </div>

      </div>
    </div>
  );
}

export default ShowsLibrary;