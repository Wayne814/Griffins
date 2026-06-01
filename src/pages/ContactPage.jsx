import { useNavigate } from "react-router-dom";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactPage() {
  const navigate = useNavigate();

  return (
    <>
      <main className="pt-24">
        <Contact />
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
