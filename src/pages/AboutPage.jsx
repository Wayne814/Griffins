import { useNavigate } from "react-router-dom";
import About from "../components/About";
import Footer from "../components/Footer";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <>
      <main className="pt-24">
        <About />
      </main>
      <div className="page-nav-footer">
        <button onClick={() => navigate("/")} className="back-home-btn">
          Back to Home
        </button>
      </div>
      <Footer />
    </>
  );
}
