import AppRoutes from "./AppRoutes";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
