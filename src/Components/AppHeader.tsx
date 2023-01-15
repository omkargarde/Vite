function AppHeader() {
  return (
    <>
      <header>
        <nav className="shadow-md px-6 py-3 bg-white flex   justify-between">
          <button className=" px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:opacity-80 text-gray-800 text-sm font-medium rounded-md hover:shadow-lg">
            button1
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:opacity-80 text-gray-800 text-sm font-medium rounded-md hover:shadow-lg">
            button2
          </button>
          <button className=" px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:opacity-80 text-gray-800 text-sm font-medium rounded-md hover:shadow-lg">
            button3
          </button>
        </nav>
      </header>
    </>
  );
}
export default AppHeader;
