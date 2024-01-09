import { useState, useEffect } from "react";
import Hero from "./components/Hero";
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
    </div>
  );
};

export default App;
