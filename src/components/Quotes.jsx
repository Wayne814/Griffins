import { useMemo, useState } from "react";

const quotes = [
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
];

function getRandomQuote(currentIndex) {
  const nextIndex = Math.floor(Math.random() * quotes.length);
  if (nextIndex === currentIndex) {
    return (nextIndex + 1) % quotes.length;
  }
  return nextIndex;
}

function Quotes() {
  const initialIndex = useMemo(() => Math.floor(Math.random() * quotes.length), []);
  const [index, setIndex] = useState(initialIndex);
  const quote = quotes[index];

  const handleNewQuote = () => {
    setIndex((currentIndex) => getRandomQuote(currentIndex));
  };

  return (
    <section id="quotes" className="quotes-section">
      <div className="quotes-container">
        <h2>Inspirational Quotes</h2>
        <div className="quote-display">
          <div className="quote-mark">“</div>
          <p className="quote-text">{quote.text}</p>
          <p className="quote-author">— {quote.author}</p>
          <button type="button" className="new-quote-btn" onClick={handleNewQuote}>
            New quote
          </button>
        </div>
      </div>
    </section>
  );
}

export default Quotes;
