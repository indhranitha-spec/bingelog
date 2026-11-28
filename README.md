# BingeLog 
**A TV show tracker inspired by Letterboxd that lets users search, save, and manage their own TV show library.**

## The Problem

It can be hard to keep track of TV shows you want to watch or shows you've already added to your watchlist. BingeLog aims to solve this by providing one simple place to search for shows and organize a personal library without having to remember everything or use multiple platforms.

## How It Works

BingeLog is a web application built with React and TypeScript. Users start at the home page and navigate to the options page, where they can either search for a new show to add or view their existing library.

When searching for shows, BingeLog uses the TVMaze API to retrieve show information, including titles, genres, and poster images. Users can add shows directly from the search results to their library or remove shows they no longer want.

The library is saved using localStorage, allowing saved shows to remain in the browser even after refreshing or closing the application.

### System Diagram

The system diagram shows how the pages connect, how show information is retrieved from the TVMaze API, and how the library is updated and stored.

<!-- Insert your system diagram image below -->
![BingeLog system diagram on a light background maps navigation from Home Page to Options, then to Log a Show and My Library; Log a Show connects to the TVMaze API, show data flows into My Library, and My Library is saved in localStorage. Arrow labels show the data and navigation flow.](docs/tools-system-diagram(1).png)

## Tech Stack

- **Language:** TypeScript, HTML, CSS
- **Library:** React
- **Routing:** React Router
- **API:** TVMaze API
- **Data Storage:** localStorage
- **Development Tool:** Vite
- **Code Editor:** VS Code
- **Version Control:** Git and GitHub

## Setup Instructions

Follow these steps to clone and run BingeLog locally.

### Prerequisites

Install the following before getting started:

- [Node.js](https://nodejs.org/) (includes npm)
- [Git](https://git-scm.com/)
- A code editor such as VS Code

### 1. Clone the repository

Open a terminal and run:

```bash
git clone https://github.com/indhranitha-spec/bingelog.git
```

### 2. Navigate into the project folder

```bash
cd bingelog
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open BingeLog

Vite will provide a local URL in the terminal, usually:

```text
http://localhost:5173
```

Open this link in your browser to use BingeLog.

### Example Run

**Example input:**

- Navigate to Log a Show.
- Type `The Rookie` into the search bar.

**Example output:**

- Search results display matching television shows.
- Each result includes a show title, genres, and poster when available.
- Clicking **Add Show** adds the selected show to My Library.
- The show appears in the library and remains there after refreshing.
- Clicking **Remove Show** deletes the show from the library.

## Roadmap

### Completed

- [x] Create the project repository.
- [x] Set up React and TypeScript using Vite.
- [x] Create the home page.
- [x] Create the options page.
- [x] Set up page navigation using React Router.
- [x] Create the Log a Show page.
- [x] Connect show searching to the TVMaze API.
- [x] Display search results with show titles, genres, and images.
- [x] Add shows to the personal library.
- [x] Create the My Library page.
- [x] Remove shows from the library.
- [x] Save the library using localStorage.
- [x] Style show cards, posters, buttons, and page layouts.

### Future Plans

- [x] remove shows from library
- [ ] Add watch statuses (Watching, Completed, Want to Watch).
- [ ] Add episode and season tracking.
- [ ] Add show ratings and reviews.
- [ ] Add filtering and sorting options.
- [ ] Improve personalization and themes.
- [ ] Add show recommendations.

## Demo

**Video Walkthrough:** [Insert video walkthrough link here]()

