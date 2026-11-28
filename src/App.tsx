//changing from useState to router to navigate without using conditionals
// Imports the tools we need to navigate between pages.
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
// Imports the CSS styling for the app.
import './App.css'
//now instead of all the functions here i can better organize the code
import ShowsLibrary from './pages/shows-library';
import LogShow from './pages/log-show';
import Home from './pages/home';
import Options from './pages/options';

// Describes the information we save about each TV show.
type SavedShow = {
  id: number;
  name: string;
  genres: string[];
  image: string | null;
};

//this is the main component of the app
// React starts here and renders the content that gets returned because of app
function App() {

  // useNavigate allows us to move to different urls making the code more efficient than useSate
  const navigate = useNavigate(); 

  // Stores all the shows added to the library.
const [savedShows, setSavedShows] = useState<SavedShow[]>(() => {
  const saved = localStorage.getItem("bingelog-shows");
  return saved ? JSON.parse(saved) : [];
});

// Saves the library whenever the saved shows change.
useEffect(() => {
  localStorage.setItem("bingelog-shows", JSON.stringify(savedShows));
}, [savedShows]);

// Adds a show to the library if it hasn't already been added.
const addShow = (show: SavedShow) => {
  setSavedShows((currentShows) => {
    if (currentShows.some((savedShow) => savedShow.id === show.id)) {
      return currentShows;
    }

    return [...currentShows, show];
  });
};

// Removes a show from the library.
const removeShow = (showId: number) => {
  setSavedShows((currentShows) =>
    currentShows.filter((show) => show.id !== showId)
  );
};

  return (
    <div className="app">
     {/* routes chooses which page to render based on the url */}
      <Routes> 
        {/*displays the home page when the url is "/"" */}
        <Route path="/" element={<Home onStart={() => navigate("/options")} />} />
        {/*displays the options page when the url is "/options" */}
        <Route path="/options" element={<Options onBack={() => navigate("/")} onLog={() => navigate("/log-show")} onLibrary={() => navigate("/library")} />} />
        {/* Displays the Library and passes in the saved shows. */}
        <Route path="/library" element={ <ShowsLibrary onBack={() => navigate("/options")} savedShows={savedShows} onRemoveShow={removeShow}
    />
  }
/>
        {/*displays the log show page when the url is "/log-show" */}
        <Route path="/log-show" element={<LogShow onBack={() => navigate("/options")} onAddShow={addShow} />} />
      </Routes>
    </div>
  );
}





export default App
