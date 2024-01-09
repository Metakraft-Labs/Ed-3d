import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Sample from "./components/Sample";
import CircularProgress from "@mui/joy/CircularProgress";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="fullScreenOverlay">
          <CircularProgress />
        </div>
      )}
      <Hero />
      <Sample />
    </div>
  );
};

export default App;
