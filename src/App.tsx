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
    <>
      <main className="h-screen flex flex-grow justify-center items-center mx-auto max-w-md pt-2 pr-8 pl-8 m-2 mb-0 pb-0">
        <div className="flex flex-col items-center place-items-center">
          <div className="flex flex-col justify-center mb-2 mt-2">
            <img src="./assets/dao.webp" alt="dao" className="size-full justify-center" />
            <img src="./assets/rushweek.webp" alt="rushweek" className="w-full h-full" />
          </div>
          <h1 className="text-center text-2xl md:text-l font-extrabold text-white mb-2">
            Onboard contributors or join a DAO!
          </h1>
          <div className="join join-vertical w-full mx-auto">
            <div
              className={`collapse collapse-arrow join-item border-base-300 border ${
                accordionState[1]? 'collapse-open' : ''
              }`}
            >
              <div className="collapse-title text-md font-medium">
                <h1
                  className="text-md font-bold mt-2 mb-2 text-center px-2 text-accent"
                  onClick={() => handleAccordionClick('1')}
                >
                  Showcase your DAO & <a className="text-secondary">onboard</a> contributors.
                </h1>
              </div>
              <div className="collapse-content" onClick={() => handleAccordionClick('1')}>
                <h2 className="text-md sm:text-md font-bold mt-2 mb-2 text-center text-white">
                  <p className="text-secondary font-extrabold">
                    Interested in onboarding more contributors?
                  </p>

                  DAO Rush Week is the first event focused specifically on helping you do just that.
                  You will showcase your DAO, how it operates and what kind of contributors it needs. As a result, you will, hopefully, have a few new people join and start contributing to your DAO!
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
                  className="text-md text-accent font-bold mb-2 text-center"
                  onClick={() => handleAccordionClick('2')}
                >
                  Learn about DAOs & <a className="text-secondary">join</a> one or a few...
                </h2>
              </div>
              <div className="collapse-content" onClick={() => handleAccordionClick('2')}>
                <h2 className="text-md text-white font-bold mb-2 text-center">
                  <p className="text-secondary font-extrabold">
                    Interested in the future of work?
                  </p>

                  DAO Rush Week offers free alternative to paying for a college degree and still being unable to find work because employers look for experience!
                  Come get some hands-on work experience in how DAOs operate, sharpen your skills in whatever domain you want to contribute to, and add some work to your resume.
                </h2>
              </div>
            </div>
            <div className="text-md font-medium">
              <h3 className="text-md text-white italic font-bold mb-2 mt-4 text-center">
                Choose your path forward.
              </h3>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt- mb-0">
            <button
              data-tally-open="3lWxpo"
              data-tally-layout="modal"
              data-tally-align-left="1"
              data-tally-overlay="1"
              data-tally-emoji-text="💞"
              data-tally-emoji-animation="heart-beat"
              data-tally-auto-close="1000"
              className="btn font-bold text-md text-white btn-secondary sm:btn-lg md:btn-md lg:bt-md border-accent mb-2"
            >
              Rep a DAO
            </button>
            <button
              data-tally-open="wodJN1"
              data-tally-layout="modal"
              data-tally-align-left="1"
              data-tally-overlay="1"
              data-tally-emoji-text="💞"
              data-tally-emoji-animation="heart-beat"
              data-tally-auto-close="1000"
              className="btn font-bold text-md text-white btn-secondary sm:btn-lg md:btn-md lg:btn-md border-accent mb-2"
            >
              Join a DAO
            </button>
          </div>
        </div>
      </main>
      <footer className="footer footer-center mx-auto max-w-md bg-base-100 text-base-content pt-16 mt-14">
        <nav className="grid grid-flow-col gap-4">
          <a href="https://lu.ma/daospring" className="link link-hover hover:text-accent">
            Luma
          </a>
          <a href="https://charmverse.io/" className="link link-hover hover:text-accent">
            Charmverse
          </a>
          <a href="https://giveth.io/project/daocember-the-ultimate-dao-playbook-2024" className="link link-hover hover:text-accent">
            Giveth
          </a>
        </nav>
        <nav>
          <div className="flex items-center gap-4">
            <a href="https://x.com/daocember" className="fill-current hover:fill-accent flex justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path d="M18.234 14.162L26.977 4h-2.072l-7.591 8.824L11.25 4H4.258l9.169 13.343L4.258 28H6.33l8.016-9.318L20.75 28h6.993zm-2.837 3.299l-.93-1.329L7.078 5.56h3.182l5.964 8.532l.93 1.329l7.753 11.09h-3.182z" />
              </svg>
            </a>
            <a href="https://daocember.substack.com/" className="fill-current hover:fill-accent flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path d="M22.539 8.242H1.46V5.406h21.08zM1.46 10.812V24L12 18.11L22.54 24V10.812zM22.54 0H1.46v2.836h21.08z" />
              </svg>
            </a>
            <a href="https://warpcast.com/daoacc" className="fill-current hover:fill-accent flex justify-center mb-.75">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 32 32">
              <path d="M18.24.24H5.76A5.76 5.76 0 0 0 0 6v12a5.76 5.76 0 0 0 5.76 5.76h12.48A5.76 5.76 0 0 0 24 18V6A5.76 5.76 0 0 0 18.24.24m.816 17.166v.504a.49.49 0 0 1 .543.48v.568h-5.143v-.569A.49.49 0 0 1 15 17.91v-.504c0-.22.153-.402.358-.458l-.01-4.364c-.158-1.737-1.64-3.098-3.443-3.098s-3.285 1.361-3.443 3.098l-.01 4.358c.228.042.532.208.54.464v.504a.49.49 0 0 1 .543.48v.568H4.392v-.569a.49.49 0 0 1 .543-.479v-.504c0-.253.201-.454.454-.472V9.039h-.49l-.61-2.031H6.93V5.042h9.95v1.966h2.822l-.61 2.03h-.49v7.896c.252.017.453.22.453.472"/></svg>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}