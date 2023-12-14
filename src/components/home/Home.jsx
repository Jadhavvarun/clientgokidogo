'use client'
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Wave from 'react-wavify';


export default function Home() {
  const phrases = ["Nachhaltig in eine einwegverpackungsfreie Zukunft||", "at the best price,", "with unique food"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (letterIndex < phrases[phraseIndex].length) {
        setCurrentPhrase((prev) => prev + phrases[phraseIndex][letterIndex]);
        setLetterIndex((prev) => prev + 1);
      } else {
        setLetterIndex(0);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setCurrentPhrase("");
      }
    }, 100); // Adjust the typing speed as needed

    return () => clearInterval(interval);
  }, [letterIndex, phraseIndex]);

  useEffect(() => {
    // Create a blinking cursor effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Adjust the blinking speed as needed

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="h-[400px] w-auto ml-16 relative mt-20">
      <div className="bg-opacity-0 fixed top-0 left-0 right-0 bottom-0 bg-center bg-cover"></div>
      <div className="flex-col absolute inset-0 flex items-start justify-center bg-opacity-50 text-white text-left">
        <h2 className="text-5xl text-black font-bold relative ml-5">
          Fair Essen bestellen ohne<br /> Verpackungsmüll!
          <br />
          <span className="text-black-200 text-4xl font-normal ml-1 inline-block relative">
            {currentPhrase}
            {cursorVisible && <span className="animate-blink-cursor">_</span>}
          </span>
        </h2>
        <div className="relative mt-4 px-4 py-2">
          <div className="relative">
            <input
              type="text"
              className="w-[650px] h-[60px] py-2 px-4 rounded-l-lg"
              placeholder="Your Address or postal code"
            />
            <button className="w-[100px] h-[60px] absolute top-0 right-0 bg-gradient-to-right text-white py-2 px-4 hover:bg-gray-800">
              Search
            </button>
          </div>
          <p className="mt-2 text-sm text-black-1">
            Angesagte Lokale:{" "}
            <Link href="/pizza">
              <span className="text-black-1 opacity-70">Pizza</span>
            </Link>{" "}
            <Link href="/sushi">
              <span className="text-black-1 opacity-70">Sushi</span>
            </Link>{" "}
            <Link href="/burger">
              <span className="text-black-1 opacity-70">Burger</span>
            </Link>{" "}
            <Link href="/nudeln">
              <span className="text-black-1 opacity-70">Nudeln</span>
            </Link>{" "}
            <Link href="/indisch">
              <span className="text-black-1 opacity-70">Indisch</span>
            </Link>{" "}
            <Link href="/thai">
              <span className="text-black-1 opacity-70">Thai uvm.</span>
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
    
  );
}