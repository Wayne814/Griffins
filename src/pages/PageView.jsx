import { useNavigate } from "react-router-dom";

export default function PageView({ component: Component }) {
  const navigate = useNavigate();

  return (
    <>
      <main className="pt-24">
        <Component />
      </main>
      <div className="page-nav-footer">
        <button onClick={() => navigate("/")} className="back-home-btn">
          Back to Home
        </button>
      </div>
    </>
  );
}
