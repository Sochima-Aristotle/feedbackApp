import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Header from "./components/Header";

import FeedebackStat from "./components/FeedebackStat";
import FeedBackList from "./components/FeedBackList";
import FeedbackForm from "./components/FeedbackForm";
import AboutLink from "./components/AboutLink";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import Post from "./components/Post";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedebackStat />
                  <FeedBackList />
                </>
              }
            />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/post" element={<Post />} />
          </Routes>
          <AboutLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
