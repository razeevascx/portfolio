import Education from "./components/Education";
import Home from "./components/Home";
import StarsCanvas from "./components/Star"; 

function App() {
  return (
    <div className="relative">
      {/* Background canvas for stars */}
      <StarsCanvas />

      {/* Main content above the stars */}
      <div className="relative z-10">
        <Home />
      {/* <Education /> */}
      </div>
    </div>
  );
}

export default App;
