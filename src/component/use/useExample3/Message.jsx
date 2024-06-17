/* eslint-disable react/prop-types */
import { Suspense, useState } from "react";
import { use } from "react";

const fetchMessage = () => {
  return new Promise((resolve) => setTimeout(() => resolve("🌼"), 1000));
};

const MessageOutpout = ({ messagePromise }) => {
  //use() will resolve the promise and return the value
  const message = use(messagePromise);
  return <p className="tex-3xl font-bold">Here is the message {message}</p>;
};

const MessageContainer = ({ messagePromise }) => {
  return (
    <Suspense fallback={<div>downloading...</div>}>
      <MessageOutpout messagePromise={messagePromise} />
    </Suspense>
  );
};

export default function Message() {
  const [messagePromise, setMessagePromise] = useState(null);
  const [show, setShow] = useState(false);

  const download = () => {
    setMessagePromise(fetchMessage());
    setShow(true);
  };

  if (show) {
    return <MessageContainer messagePromise={messagePromise} />;
  } else {
    return (
      <div>
        <button
          onClick={download}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          download message
        </button>
      </div>
    );
  }
}

//Proposed way of doing it without using use() hook

/* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";

// const fetchMessage = () => {
//   return new Promise((resolve) => setTimeout(() => resolve("🌼"), 1000));
// };

// const MessageOutput = ({ message }) => {
//   return <p className="text-3xl font-bold">Here is the message: {message}</p>;
// };

// const MessageContainer = ({ messagePromise }) => {
//   const [message, setMessage] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let isMounted = true;
//     messagePromise.then((msg) => {
//       if (isMounted) {
//         setMessage(msg);
//         setLoading(false);
//       }
//     });
//     return () => {
//       isMounted = false;
//     };
//   }, [messagePromise]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return <MessageOutput message={message} />;
// };

// export default function Message() {
//   const [messagePromise, setMessagePromise] = useState(null);
//   const [show, setShow] = useState(false);

//   const download = () => {
//     setMessagePromise(fetchMessage());
//     setShow(true);
//   };

//   if (show) {
//     return <MessageContainer messagePromise={messagePromise} />;
//   } else {
//     return (
//       <div>
//         <button
//           onClick={download}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Download message
//         </button>
//       </div>
//     );
//   }
// }
