import React from "react";
import Comments from "./Comments";
import Enterprise from "./Enterprise";
import Footer from "./Footer";
import Method from "./Method";
import StatsSection from "./StatsSection";

const App = () => {
  return (

    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-600 mt-4">
          </p>
        </div>
      </main>
      <Enterprise/>
      <StatsSection />
      <Comments/>
      <Method/>
      <Footer/>
    </div>
  );
};

export default App;
