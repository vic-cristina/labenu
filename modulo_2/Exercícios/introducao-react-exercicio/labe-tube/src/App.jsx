import "./App.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { MediaGrid } from "./components/MediaGrid";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="tela-inteira">
      <Header />
      <main>
        <Sidebar />
        <MediaGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
