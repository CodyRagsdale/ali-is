import React, { useState } from "react";
import "./App.css";

const compliments = [
  { text: "a badass", author: "Cody" },
  { text: "thoughtful and caring", author: "Kate" },
  { text: "an amazing human", author: "Yvette" },
  { text: "a genius", author: "Ali" },
  { text: "beautiful", author: "Cody" },
  { text: "impeccably hilarious", author: "Nick" },
  { text: "determined", author: "Cody" },
  { text: "a WP", author: "Cody" },
  { text: "a person who feels BIG", author: "Yvette and Cody" },
  { text: "the best person I know", author: "Cody" },
  {
    text: "fiercely independent",
    author: "(...but still needs her mom sometimes) Yvette",
  },
  { text: "gorgeous", author: "Cody" },
  { text: "my best friend", author: "Cody" },
  { text: "hardworking", author: "Yvette" },
  { text: "inspiring", author: "All of us" },
  { text: "a survivor", author: "Yvette" },
  { text: "the best thing that ever happened to me", author: "Cody" },
  { text: "dependable", author: "Cody" },
  { text: "the love of my life", author: "Cody" },
  { text: "capable of anything", author: "All of us" },
  { text: "an onion", author: "Cody" },
  { text: "deeply creative", author: "Kate" },
  { text: "an insane cat mom", author: "Yvette" },
  { text: "a great cat mom", author: "Kate" },
  { text: "quick-witted", author: "Cody" },
  { text: "radiant", author: "Cody" },
  { text: "so intelligent and so capable", author: "Yvette" },
  { text: "sassy", author: "The World" },
  { text: "very witty", author: "Yvette" },
  { text: "the snack queen", author: "Kate & Cody" },
  { text: "going to show you how the cow eats the cabbage", author: "Ali" },
  { text: "unstoppable", author: "Cody" },
  { text: "very funny", author: "Yvette" },
  { text: "a sweaty gamer", author: "Kate & Cody" },
  { text: "my person", author: "Cody" },
  { text: "a great listener", author: "Kate" },
  { text: "a total babe", author: "Cody" },
  { text: "the turtle slayer", author: "Cody" },
  { text: "a talented artist", author: "Kate" },
  { text: "witty", author: "Nick" },
  { text: "the okayest sister", author: "Nick" },
  { text: "the second smartest in the family", author: "Nick" },
  { text: "loving", author: "Nick" },
  { text: "patient", author: "Nick" },
  { text: "a Meat Goddess", author: "XO XO Gossip Girl" },
  { text: "tender-hearted", author: "Yvette" },
  { text: "fiercely loyal", author: "Yvette" },
];

const fonts = [
  "Courier", // Monospace, typewriter-style font
  "Impact", // Thick, bold sans-serif
  "Papyrus", // Handwritten with a texture
  "Algerian", // Decorative, uppercase style
  "Broadway", // Art deco, theatrical style
  "Castellar", // All uppercase, chiseled look
  "Brush Script MT", // Script, handwritten style
  "Indie Flower", // Light, doodled handwriting style
  "Pacifico", // Rounded, cursive script
  "Dancing Script", // Flowing cursive
  "Lobster", // Modern, quirky cursive
  "Luckiest Guy", // Bold and playful
  "Chewy", // Rounded and thick
  "Architects Daughter", // Like architectural lettering
  "Rock Salt", // Rough, handwritten style
  "Fredericka the Great", // Artistic, old-world style
  "Girassol", // Rounded, handwritten style
  "Kalam", // Modern handwritten style
  "Handlee", // Light, casual handwriting
  "Great Vibes", // Elegant cursive
  "Kaushan Script", // Brushed script
  "Permanent Marker", // Thick, handwritten style
];

const fontStyles = ["normal", "italic", "bold", "bold italic"];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const [compliment, setCompliment] = useState({ text: "", author: "" });
  const [font, setFont] = useState(fonts[0]);
  const [fontStyle, setFontStyle] = useState(fontStyles[0]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showAuthor, setShowAuthor] = useState(false);

  const spin = (index, delay, complimentsCopy) => {
    setTimeout(() => {
      setCompliment(complimentsCopy[index % complimentsCopy.length]);
      setFont(fonts[Math.floor(Math.random() * fonts.length)]);
      setFontStyle(fontStyles[Math.floor(Math.random() * fontStyles.length)]);
      if (index < 15) {
        spin(index + 1, delay, complimentsCopy);
      } else {
        setIsSpinning(false);
      }
    }, delay);
  };

  const getRandomCompliment = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      setShowAuthor(false);
      const complimentsCopy = shuffleArray([...compliments]);
      spin(0, 100, complimentsCopy);
    }
  };

  return (
    <div className="App">
      <div className="compliment-container">
        <div className="static-text">Ali is...</div>
        <br></br>
        <h1
          className="compliment"
          style={{
            fontFamily: font,
            fontStyle: fontStyle,
          }}
          onClick={() => setShowAuthor(true)}
        >
          {compliment.text}
          {showAuthor && <span> - {compliment.author}</span>}
        </h1>
      </div>
      <button className="color-change" onClick={getRandomCompliment}>
        Spin
      </button>
    </div>
  );
}

export default App;
