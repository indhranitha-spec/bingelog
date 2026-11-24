// This creates the Options page that users see after clicking Go.
// onBack is a function passed down from the App component.
function Options({
  onBack,
  onLog,
  onLibrary
}: {
  onBack: () => void;
  onLog: () => void;
  onLibrary: () => void;
}) {
  return (
    <div className="options-page">

      {/* Back button calls onBack to return to the home page. */}
      <button className="btn" onClick={onBack}>
        ← Back
      </button>

      {/* Grid holds the two main options side by side. */}
      <div className="options-grid">

        {/* First section: searching for a new show to log. */}
        <section className="option">
          <h1>Log a new show</h1>

        </section>
        {/* NEW BUTTON GOES HERE */}
          <button className="btn" onClick={onLog}>
            Log a Show
          </button>  

        {/* Second section: option to view shows already watched. */}
        <section className="option">
          <h1>View watched shows</h1>

          {/* Clicking Log now takes the user to the Library page. */}
          <button className="btn" onClick={onLibrary}>
            View Library
          </button>
        </section>

      </div>
    </div>
  )
}

export default Options;