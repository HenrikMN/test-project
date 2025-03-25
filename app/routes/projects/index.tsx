import { useState } from "react";

// export default function ImageExpand() {
//   const [isLage, setIsLarge] = useState(false);

// return (
// <div className="flex justify-center items-center min-h-screen bg-gray-100">
//   <img
//     src="kjermbilde 2025-03-25 131723.png"
//     alt=""
//     className={`cursor-pointer transition-all duration-300 ${
//       isLage ? "w-{500px} h-{500px}" : "w-32 h-32"
//     } rounded-lg shadow-lg`}
//     onClick={() => setIsLarge(!isLage)}
//   />
// </div>
// );
// }

export default function team() {
  const [isLage, setIsLarge] = useState(false);
  return (
    <div>
      <h2 className="text-4xl mb-3 ml-3 font-semibold">Projects</h2>
      <div className="bg-white py-14 sm:py-23 rounded-sm">
        <div className="mx-auto grid max-w-7xl  gap-20 px-6 lg:px-8 xl:grid-cols-3">
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
            </div>
          </>
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <img
              src="./public/skjermbilde 2025-03-25 131723.png"
              alt=""
              className={`cursor-pointer transition-all duration-300 ${
                isLage ? "w-{500px} h-{500px}" : "w-80 h-89"
              } rounded-lg shadow-lg`}
              onClick={() => setIsLarge(!isLage)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
