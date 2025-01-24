
import React, { useState, useEffect } from "react";

export const Header = (props) => {
  const words = [
"software",
    "Revolutionize recruitment",
    "Save countless hours",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingInterval;
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      typingInterval = setInterval(() => {
        setDisplayText((prev) => prev.slice(0, -1)); // Delete one character
      }, 100);
    } else {
      typingInterval = setInterval(() => {
        setDisplayText((prev) => currentWord.slice(0, prev.length + 1)); // Add one character
      }, 200);
    }

    if (!isDeleting && displayText === currentWord) {
      // Pause before deleting
      clearInterval(typingInterval);
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayText === "") {
      // Switch to the next word
      clearInterval(typingInterval);
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearInterval(typingInterval); // Cleanup on re-render
  }, [displayText, isDeleting, words, currentWordIndex]);


  return (
    <header id="header">
  
        <div className="overlay">
          <div className="container">
            <div className="row">
              {/* Left Half: Text Content */}
              <div className="col-md-6 intro-text" dir="rtl" style={{ textAlign: 'left' }}>
  <h1>
    Simplified video-based   </h1>
    <h1>
     candidate assessment</h1>
     
       <h1>
       <span className="cursor">|</span>
      {displayText}
     
    </h1>
  <p>Thousands of companies, organizations, and recruiters rely on Hireflix to revolutionize their hiring and recruitment processes. With its one-way interview software, hiring teams can accelerate their recruitment, saving countless hours.</p>
  <a href="#features" className="btn btn-custom btn-lg page-scroll">
    Learn More
  </a>
</div>


              {/* Right Half: Intro Div */}
              <div className="col-md-6 intro-image">
                {/* You can add an image or other content here if needed */}
              </div>
            </div>
          </div>
     
      </div>
    </header>
  );
};
