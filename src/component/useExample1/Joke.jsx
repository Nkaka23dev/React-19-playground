/**This is React 19 example of fetching data
 * using the use() hook below use its version with React 18 and below **/

import { use, Suspense } from "react";

const fetchData = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  return response.json();
};

const JokeItem = () => {
  const joke = use(fetchData());
  return (
    <>
      <div className="bg-sky-100 px-4 space-y-1 my-6 rounded-md">
        <h2>{joke.value}</h2>
      </div>
      <a
        href="."
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        back
      </a>
    </>
  );
};

export default function Joke() {
  return (
    <Suspense
      fallback={
        <h2 className="text-2xl text-center font-bold mt-5">Loading...</h2>
      }
    >
      <JokeItem />
    </Suspense>
  );
}

// /* eslint-disable react/prop-types */
// //This  a traditional way of fetching data in react, using useEffect and useState for React 18 and below
// import { useEffect, useState } from "react";

// const JokeItem = ({ joke }) => {
//   return (
//     <>
//       <div className="bg-sky-100 px-4 space-y-1 my-6 rounded-md">
//         <h2>{joke.value}</h2>
//       </div>
//       <a
//         href="."
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         back
//       </a>
//     </>
//   );
// };

// const Joke = () => {
//   const [joke, setJoke] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJoke = async () => {
//       try {
//         const response = await fetch("https://api.chucknorris.io/jokes/random");
//         const data = await response.json();
//         setJoke(data);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchJoke();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-2xl text-center font-bold mt-5">Loading...</div>
//     );
//   }

//   return <JokeItem joke={joke} />;
// };

// export default Joke;
