//changing from useState to router to navigate without using conditionals
// Imports the tools we need to navigate between pages.
import { Routes, Route, useNavigate } from 'react-router-dom'

// Imports the CSS styling for the app.
import './App.css'
//now instead of all the functions here i can better organize the code
import ShowsLibrary from './pages/shows-library';
import LogShow from './pages/log-show';
import Home from './pages/home';
import Options from './pages/options';

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





export default App
