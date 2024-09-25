export default function App() {
  return (
    <main className="h-screen flex justify-center items-center mx-auto max-w-md pt-4 p-8 m-4">
      <div className="flex flex-col items-center place-items-center">
        <div className="flex flex-col justify-center mb-2 mt-2">
          <img src="/assets/dao.webp" alt="dao" className="size-full justify-center" />
          <img src="/assets/rushweek.webp" alt="rushweek" className="w-full h-full " />
        </div>
          <h1 className="text-lg sm:text-md font-bold mt-2 mb-2 text-center text-accent">
            Onboard contributors or join a DAO!
          </h1>
          <h2 className="text-lg text-accent font-bold mb-2">
            Come show or learn the way.
          </h2>
          <h3 className="text-md text-white font-bold mb-4 mt-6">
            So! What do you wanna do?
          </h3>
        <div className="flex justify-center space-x-4">
          <button data-tally-open="3lWxpo" data-tally-layout="modal" data-tally-align-left="1" data-tally-overlay="1" data-tally-emoji-text="💞" data-tally-emoji-animation="heart-beat" data-tally-auto-close="1000" className="btn font-bold text-md text-white btn-secondary sm:btn-lg md:btn-md lg:bt-md">Rep a DAO</button>
          <button className="btn font-bold text-md text-white btn-secondary sm:btn-lg md:btn-md lg:btn-md" href="https://github.com/luma-team/examples">Join a DAO</button>
        </div>
      </div>
    </main>
  )
}