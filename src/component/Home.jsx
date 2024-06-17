export default function Home() {
  return (
    <div className="py-10 ">
      <p className="font-semibold">
        This is a playground for React 19, it is for learning purpose and
        exploration of React 19 before it is release.
      </p>
      <div className="py-2">
        <p>Examples</p>
      </div>
      <nav className="">
        <ul className="mt-2 space-y-5">
          <li className="bg-sky-100 px-4 space-y-1 py-5 rounded-md">
            <div className="">
              <h1 className="font-semibold">1) use() hook example 1 </h1>
              <p>use the use() hook to fetch random jokes from Chuck norris</p>
            </div>
            <div>
              <a href="/joke" className="text-blue-600 hover:text-blue-800">
                View
              </a>
            </div>
          </li>
          <li className="bg-sky-100 px-4 space-y-1 py-5 rounded-md">
            <div className="">
              <h1 className="font-semibold">2) use() hook example 2 </h1>
              <p>use the use() hook to fetch post from json placeholder</p>
            </div>
            <div>
              <a href="/posts" className="text-blue-600 hover:text-blue-800">
                View
              </a>
            </div>
          </li>
          <li className="bg-sky-100 px-4 space-y-1 py-5 rounded-md">
            <div className="">
              <h1 className="font-semibold">3) use() hook example 3 </h1>
              <p>use the use() hook to resolve a regular promise</p>
            </div>
            <div>
              <a href="/message" className="text-blue-600 hover:text-blue-800">
                View
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
