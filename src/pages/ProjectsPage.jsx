import { useNavigate } from "react-router-dom";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <>
      <main className="pt-24">
        <Projects />
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
