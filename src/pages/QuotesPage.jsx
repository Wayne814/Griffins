import { useNavigate } from "react-router-dom";
import Quotes from "../components/Quotes";
import Footer from "../components/Footer";

export default function QuotesPage() {
  const navigate = useNavigate();

  return (
    <>
      <main className="pt-24">
        <Quotes />
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
