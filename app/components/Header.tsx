export default function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-green-500 p-6">
        <ul className="flex border-b">
          <li className="-mb-px mr-1">
            <a
              className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
              href="#"
            >
              Active
            </a>
          </li>
          <li className="mr-1">
            <a
              className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
              href="#"
            >
              Tab
            </a>
          </li>
          <li className="mr-1">
            <a
              className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
              href="#"
            >
              Tab
            </a>
          </li>
          <li className="mr-1">
            <a
              className="bg-white inline-block py-2 px-4 text-gray-400 font-semibold"
              href="#"
            >
              Tab
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
