import { useNavigate } from "react-router-dom";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function SkillsPage() {
  const navigate = useNavigate();

  return (
    <>
      <main className="pt-24">
        <Skills />
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
