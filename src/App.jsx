import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from "./pages/Home/Home";
import Privacy from "./pages/Privacy/Privacy";
import Error from "./pages/Error/Error";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
