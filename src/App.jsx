import { Route, RouterProvider } from "react-router-dom";

import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./loyouts/MainLayout";
import Joke from "./component/useExample1/Joke";
import Home from "./component/Home";
import Posts from "./component/useExample2/Posts";
import Message from "./component/useExample3/Message";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="joke" element={<Joke />} />
        <Route path="posts" element={<Posts />} />
        <Route path="message" element={<Message />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
