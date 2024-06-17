import { Route, RouterProvider } from "react-router-dom";

import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Joke from "./component/use/useExample1/Joke";
import Posts from "./component/use/useExample2/Posts";
import Message from "./component/use/useExample3/Message";
import Home from "./component/Home";
import MainLayout from "./loyouts/MainLayout";
import Form from "./component/action/Form";
import AddToCart from "./component/action/AddToCart";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="joke" element={<Joke />} />
        <Route path="posts" element={<Posts />} />
        <Route path="message" element={<Message />} />
        <Route path="form" element={<Form />} />
        <Route path="cart" element={<AddToCart />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
