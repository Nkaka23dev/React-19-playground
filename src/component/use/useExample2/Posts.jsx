// /* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// const PostsItem = ({ posts }) => {
//   return (
//     <div>
//       {posts.map((value, index) => {
//         return (
//           <div
//             key={index}
//             className="bg-sky-100 px-4 space-y-1 my-6 rounded-md py-4"
//           >
//             <h2 className="font-semibold">
//               {index + 1} - {value.title}
//             </h2>
//             <div>{value.body}</div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default function Posts() {
//   const [posts, setPosts] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         const data = await response.json();
//         setPosts(data);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (loading)
//     return (
//       <div className="text-2xl text-center font-bold mt-5">Loading...</div>
//     );

//   return <PostsItem posts={posts} />;
// }

/** IN THE FOLLOWING CODE WILL GOIN TO USE use() HOOK OF REACT 19 INSTEAD OF REACT 18   **/

import { Suspense, use } from "react";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const PostsItem = () => {
  const posts = use(fetchPosts());
  return (
    <div>
      {posts.map((value, index) => {
        return (
          <div
            key={index}
            className="bg-sky-100 px-4 space-y-1 my-6 rounded-md py-4"
          >
            <h2 className="font-semibold">
              {index + 1} - {value.title}
            </h2>
            <div>{value.body}</div>
          </div>
        );
      })}
    </div>
  );
};

export default function Posts() {
  return (
    <Suspense
      fallback={
        <div className="text-2xl text-center font-bold mt-5">Loading...</div>
      }
    >
      <PostsItem />
    </Suspense>
  );
}
