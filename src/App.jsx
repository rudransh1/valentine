import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-5 pb-8 text-center relative">
          <img
            src={lovesvg2}
            className="absolute top-8 right-6 md:right-12 w-24 md:w-32 opacity-90 animate-pulse pointer-events-none"
            alt=""
          />
          <img
            src={lovesvg}
            className="absolute bottom-24 left-6 md:left-12 w-24 md:w-32 opacity-90 animate-pulse pointer-events-none"
            alt=""
          />
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-rose-100 px-6 pt-8 pb-8 md:px-10 md:pt-6 md:pb-10 max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold text-rose-800 mb-4">
              Thanks, Tanushka 💕
            </h1>
            <img
              src="https://media.tenor.com/FNo0DzMEUMYAAAAM/roses-red.gif"
              alt="Red roses bouquet"
              className="rounded-2xl shadow-lg w-52 md:w-60 max-h-64 object-contain mx-auto mb-4"
            />
            <p className="text-xl md:text-2xl font-medium text-rose-800 mb-1 leading-tight">
              For now — a little something on the screen.
            </p>
            <p className="text-lg text-rose-600 mb-4">
              The real ones are for when we meet.
            </p>
            <p className="text-base text-zinc-600 max-w-sm mx-auto leading-relaxed">
              Looking forward to time offline, just us. I&apos;m already thinking about what you&apos;d like — I&apos;ll keep at it till we meet. 🌹
            </p>
            <p className="text-sm text-zinc-500 mt-6">
              — Rudransh
            </p>
          </div>
        </div>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Will you be my Valentine, Tanushka?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/Xeven777/valentine"
      target="_blank"
      rel="noopener noreferrer"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
