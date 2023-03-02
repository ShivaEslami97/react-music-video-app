import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import MusicVideos from "./components/MusicVideos";

const App = () => {
  return (
    <>
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
      <main className="container py-4 px-2 mx-auto">
        <MusicVideos />
      </main>
    </>
  );
};

export default App;
