export default function Index() {
  return (
    <>
      <nav className="flex justify-center space-x-4">
        <a
          href="/dashboard"
          className="font-bold px-3 py-2 text-purple-700 bg-purple-50 rounded-lg hover:bg-purple-100 hover:text-purple-900"
        >
          Home
        </a>
        <a
          href="/team"
          className="font-bold px-3 py-2 text-red-700 rounded-lg bg-red-50 hover:bg-red-100 hover:text-red-900"
        >
          Team
        </a>
        <a
          href="/projects"
          className="font-bold px-3 py-2 text-green-700 rounded-lg bg-green-50 hover:bg-green-100 hover:text-green-900"
        >
          Projects
        </a>
        <a
          href="/reports"
          className="font-bold px-3 py-2 text-indigo-700 rounded-lg bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-900"
        >
          Reports
        </a>
      </nav>
      <br />
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl flex items-center gap-x-4">
        <div className="shrink-0">
          <img className="size-12" src="/hello-4x.gif" alt="ChitChat Logo" />
        </div>
        <div>
          <h4 className="text-xl font-medium text-black">ChitChat</h4>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
      <br />
      <div className="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-6">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="hello-4x.gif"
          alt="Miku's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Hatsune Miku</p>
            <p className="text-slate-500 font-medium"> Vocaloid</p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-400 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
      <br />
      <button className="py-2 px-5 m-3 bg-violet-500 text-white font-semibold rounded-full shadow-sm hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
        Save Changes
      </button>
      <button className="btn-primary">Save Changes</button>
      <br />
      <div>
        <div className="flex items-center space-x-2 text-base m-2">
          <h4 className="font-semibold text-slate-">Contributors</h4>
          <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 pr-">
            204
          </span>
        </div>
        <div className="mt-3 ml-3 flex -space-x-2 overflow-">
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="any-relevance-toward-the-marking.png"
            alt=""
          />
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="catErm-4x.gif"
            alt=""
          />
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="GIGA.png"
            alt=""
          />
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="SCHIZO-4x.gif"
            alt=""
          />
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="my-dressup-darling.jpg"
            alt=""
          />
        </div>
        <div className="mt-3 ml-3 text-sm font-medium">
          <a href="#" className="text-blue-500">
            + 198 others
          </a>
        </div>
      </div>
    </>
  );
}
