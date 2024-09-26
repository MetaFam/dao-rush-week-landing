import { useState } from'react';

export default function App() {
  const [accordionState, setAccordionState] = useState({
    1: false,
    2: false,
    3: false,
  } as { [key: string]: boolean });

  const handleAccordionClick = (id: string) => {
    setAccordionState((prevState) => {
      return Object.keys(prevState).reduce((acc, key) => {
        if (key === id) {
          acc[key] =!prevState[key];
        } else {
          acc[key] = false;
        }
        return acc;
      }, {} as { [key: string]: boolean });
    });
  };

  return (
    <main className="h-screen flex justify-center items-center mx-auto max-w-md pt-2 pr-8 pl-8 m-2">
      <div className="flex flex-col items-center place-items-center">
        <div className="flex flex-col justify-center mb-2 mt-2">
          <img src="./assets/dao.webp" alt="dao" className="size-full justify-center" />
          <img src="./assets/rushweek.webp" alt="rushweek" className="w-full h-full" />
        </div>
        <div className="join join-vertical w-full mx-auto">
          <div
            className={`collapse collapse-arrow join-item border-base-300 border ${
              accordionState[1]? 'collapse-open' : ''
            }`}
          >
            <div className="collapse-title text-md font-medium">
              <h1
                className="text-lg sm:text-md font-bold mt-2 mb-2 text-center text-accent"
                onClick={() => handleAccordionClick('1')}
              >
                Onboard contributors or join a DAO!
              </h1>
            </div>
            <div className="collapse-content" onClick={() => handleAccordionClick('1')}>
              <h2 className="text-md sm:text-md font-bold mt-2 mb-2 text-center text-white">
                A DAO is a Decentralized Autonomous Organization.
              </h2>
            </div>
          </div>
          <div
            className={`collapse collapse-arrow join-item border-base-300 border ${
              accordionState[2]? 'collapse-open' : ''
            }`}
          >
            <div className="collapse-title text-md font-medium">
              <h2
                className="text-lg text-accent font-bold mb-2 text-center"
                onClick={() => handleAccordionClick('2')}
              >
                Come show or learn the way.
              </h2>
            </div>
            <div className="collapse-content" onClick={() => handleAccordionClick('2')}>
              <h2 className="text-md text-white font-bold mb-2 text-center">
                Are you the veteran or the greenhorn?
              </h2>
            </div>
          </div>
          <div
            className={`collapse collapse-arrow join-item border-base-300 border ${
              accordionState[3]? 'collapse-open' : ''
            }`}
          >
            <div className="collapse-title text-md font-medium">
              <h3
                className="text-md text-accent font-bold mb-2 text-center"
                onClick={() => handleAccordionClick('3')}
              >
                So! What do you wanna do?
              </h3>
            </div>
            <div className="collapse-content mb-3" onClick={() => handleAccordionClick('3')}>
              <h3 className="text-md text-white font-bold mb-4 text-center">
                Choose your own adventure
              </h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-2">
          <button
            data-tally-open="3lWxpo"
            data-tally-layout="modal"
            data-tally-align-left="1"
            data-tally-overlay="1"
            data-tally-emoji-text="💞"
            data-tally-emoji-animation="heart-beat"
            data-tally-auto-close="1000"
            className="btn font-bold text-md text-white btn-secondary sm:btn-lg md:btn-md lg:bt-md"
          >
            Rep a DAO
          </button>
          <button className="btn font-bold text-md text-white btn-secondary sm:btn-lg md:btn-md lg:btn-md">
            Join a DAO
          </button>
        </div>
      </div>
    </main>
  );
}