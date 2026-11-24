//changing from useState to router to navigate without using conditionals
// Imports the tools we need to navigate between pages.
import { Routes, Route, useNavigate } from 'react-router-dom'

// Imports the CSS styling for the app.
import './App.css'
//now instead of all the functions here i can better organize the code
import ShowsLibrary from './pages/shows-library';
import LogShow from './pages/log-show';

//this is the main component of the app
// React starts here and renders the content that gets returned because of app
function App() {

  // useNavigate allows us to move to different urls making the code more efficient than useSate
  const navigate = useNavigate(); 

  return (
    <div className="app">
     {/* routes chooses which page to render based on the url */}
      <Routes> 
        {/*displays the home page when the url is "/"" */}
        <Route path="/" element={<Home onStart={() => navigate("/options")} />} />
        {/*displays the options page when the url is "/options" */}
        <Route path="/options" element={<Options onBack={() => navigate("/")} onLog={() => navigate("/log-show")} onLibrary={() => navigate("/library")} />} />
        {/*displays the library page when the url is "/library" */}
        <Route path="/library" element={<ShowsLibrary onBack={() => navigate("/options")} />} />
        {/*displays the log show page when the url is "/log-show" */}
        <Route path="/log-show" element={<LogShow onBack={() => navigate("/options")} />} />
      </Routes>
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

export default App
