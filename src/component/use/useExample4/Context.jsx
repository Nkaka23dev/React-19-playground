import { ThemeContext } from "../../../contexts/ThemeContext";
import { use } from "react";

export default function Context() {
  const { theme, toggelTheme } = use(ThemeContext);

  return (
    <div
      className={`max-w-xl mx-auto space-y-3 mt-3 shadow-lg px-10 py-10 rounded-md ${
        theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-600"
      }`}
    >
      <h1
        className={`font-bold text-xl ${
          theme === "dark" ? "text-white" : "text-gray-600"
        }`}
      >
        Themed Card
      </h1>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, odit
        deleniti! Laudantium nemo placeat error unde veritatis voluptatibus
        maxime eius doloribus soluta vero. Delectus sed voluptates eaque
        laboriosam, earum autem molestiae vel animi commodi. Cumque a officiis
        porro adipisci maiores consequatur, placeat enim veritatis et eveniet
        pariatur ad iste corrupti mollitia provident sint aliquid! Nobis
        incidunt sequi ullam tenetur ab harum rerum deleniti voluptas quisquam
        dolor blanditiis quia vero facere quasi, ipsum numquam hic sunt eaque
        nisi iure ratione ex quae exercitationem temporibus! Ipsam fugiat
        aspernatur perspiciatis quaerat at. Cumque, voluptates, voluptate
        nesciunt earum, sunt cupiditate libero commodi hic numquam in debitis
        modi perferendis quia voluptas! Consequatur, labore obcaecati
        necessitatibus rerum ratione praesentium dolores provident magnam
        aliquid aspernatur commodi eos dolorem amet. Labore laborum harum
      </div>
      <button
        onClick={toggelTheme}
        className={`font-semibold px-6 py-3 rounded-lg  cursor-pointer ${
          theme === "dark"
            ? "text-gray-800 bg-white hover:bg-gray-200"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {theme === "light" ? "  Switch to dark mode" : "Switch to light mode"}
      </button>
    </div>
  );
}
