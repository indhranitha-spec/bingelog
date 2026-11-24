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
export default Home;