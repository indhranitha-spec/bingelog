import { useState } from 'react'
import './App.css'
import ShowsLibrary from './pages/shows-library';

//this is the main component of the app
// React starts here and renders the content that gets returned because of app
function App() {

  // useState keeps track of which page the user is currently on.
  //  now the user can switch between the home page and the options page and library
  // "page" stores the current value, and "setPage" changes that value.  
  const [page, setPage] = useState<"home" | "options" | "library">("home");

  return (
    <div className="app">
      
      {/* If the page state is "home", display the Home component. */}
      {page === "home" ? (

        // Home receives a function called onStart.
        // Clicking the Go button will change the page state to "options".
        <Home onStart={() => setPage("options")} />

      ) : page === "options" ? (
        // If the current page is "options", display the Options component.
        // onBack takes the user back home.
        // onLog takes the user to the Library page.
        <Options
          onBack={() => setPage("home")}
          onLog={() => setPage("library")}
        />
      ) : (

        // If the page is not home or Options component display library.
        // the back button now takes the user back to the Options page
        <ShowsLibrary onBack={() => setPage("options")} />

      )}
    </div>
  );
}

// This creates the Home page.
// onStart is a function passed down from the App component.
function Home({ onStart }: { onStart: () => void }) {
  return (
    // This div holds all of the content for the home page.
    <div className="home-page">

      {/* The name of the website. */}
      <header className="logo">BingeLog</header>

      {/* Main section containing the welcome text and button. */}
      <main className="home-content">

        {/* Main welcome heading. */}
        <h1>Welcome to BingeLog</h1>

        {/* Secondary heading to encourage the user to start. */}
        <h2>Let’s Get Started</h2>

        {/* Button that calls the onStart function when clicked. */}
        <button className="btn" onClick={onStart}>
          Go <span>→</span>
        </button>

      </main>
    </div>
  );
}

// This creates the Options page that users see after clicking Go.
// onBack is a function passed down from the App component.
function Options({
  onBack,
  onLog
}: {
  onBack: () => void;
  onLog: () => void;
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

          {/* Search area. At this point it is only a visual input. */}
          <div className="search-placeholder">
            <input type="text" placeholder="Search..." />
          </div>
        </section>

        {/* Second section: option to view shows already watched. */}
        <section className="option">
          <h1>View watched shows</h1>

          {/* Clicking Log now takes the user to the Library page. */}
          <button className="btn" onClick={onLog}>
            Log
          </button>
        </section>

      </div>
    </div>
  )
}

export default App
