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
    <>
      <div className="hidden sm:flex">
        {isLoading && (
          <div className="fullScreenOverlay">
            <CircularProgress />
          </div>
        )}
        <Hero />
      </div>
      <div className="flex flex-1 h-screen bg-blue-100 text-black/30 text-center  justify-center items-center px-[2rem]  font-bold  sm:hidden">
        <h3>Mobile View is not supported. Checkout in Laptop</h3>
      </div>
    </>
  );
};

export default App;
