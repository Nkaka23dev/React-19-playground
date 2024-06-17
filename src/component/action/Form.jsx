import { useState } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
        pending ? "opacity-50 hover:bg-blue-500" : ""
      }`}
      type="submit"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

export default function Form() {
  const [posts, setPosts] = useState([]);

  const formaction = async (formData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const newPost = {
      title: formData.get("title"),
      description: formData.get("description"),
    };
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <div>
      <form action={formaction} className="space-y-3 mt-5">
        <div className="space-y-2">
          <label htmlFor="username">Title:</label>
          <input
            className=" appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            name="title"
            placeholder="Username"
          />
        </div>
        <div>
          <label htmlFor="password">Description:</label>
          <textarea
            className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="description"
            placeholder="Description"
          ></textarea>
        </div>
        <SubmitButton />
      </form>
      {posts.length > 0 && (
        <div className="mt-4">
          <h1 className="font-bold text-xl">Submitted data: </h1>
          {posts.map((value, index) => (
            <div key={index} className="mt-5 space-y-2 bg-sky-100 p-4">
              <div>
                <p>
                  Title: <b className="text-red-500">{value.title}</b>
                </p>
                <p>
                  Description:
                  <b className="text-red-500">{value.description}</b>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// import { useState } from "react";

// export default function Form() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [show, setShow] = useState(false);

//   const [formData, setFormData] = useState({ title: "", description: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormData({ title, description });
//     setShow(true);
//   };
//   return (
//     <div>
//       <form action="#" className="space-y-3 mt-5" onSubmit={handleSubmit}>
//         <div className="space-y-2">
//           <label htmlFor="username">Title:</label>
//           <input
//             className=" appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="username"
//             type="text"
//             name="title"
//             placeholder="Username"
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Description:</label>
//           <textarea
//             className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="password"
//             name="description"
//             placeholder="Description"
//             onChange={(e) => setDescription(e.target.value)}
//           ></textarea>
//         </div>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           type="submit"
//         >
//           Submit
//         </button>
//       </form>
//       {show && (
//         <div className="mt-10 space-y-2">
//           <div>
//             <h1 className="font-bold text-xl">Submitted data: </h1>
//           </div>
//           <div>
//             <p>
//               Title: <b className="text-red-500">{formData.title}</b>
//             </p>
//             <p>
//               Description:{" "}
//               <b className="text-red-500">{formData.description}</b>{" "}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
