import { useState } from "react";

export default function team() {
  const [isLarge, setIsLarge] = useState(false);

  const handleImageClick = () => {
    setIsLarge(!isLarge);
  };

  return (
    <div>
      <h2 className="text-4xl mb-3 ml-3 font-semibold">Projects</h2>
      <div className="bg-white py-14 sm:py-23 rounded-sm">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <>
            <div className="flex items-center ml-5 gap-x-4">
              <img
                src="catErm-4x.gif"
                alt=""
                className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
              />
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                  Gutendex
                </h2>
                <p className="text-gray-500">Bokapplikasjon</p>
              </div>
              <div>
                <a
                  className="mt-3 ml-3 text-sm font-semibold text-blue-600"
                  href="https://adrian-kodehode.github.io/gutendex/"
                >
                  View Project
                </a>
              </div>
            </div>
          </>
          <div className="flex justify-center items-center min-h-50 bg-gray-100">
            <img
              src="./public/skjermbilde 2025-03-25 131723.png"
              alt=""
              className="max-h-64 cursor-pointer"
              onClick={handleImageClick}
            />
          </div>
        </div>
      </div>
      {isLarge && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
          onClick={handleImageClick}
        >
          <img
            src="./public/skjermbilde 2025-03-25 131723.png"
            alt=""
            className="max-h-full max-w-full"
          />
        </div>
      )}
    </div>
  );
}