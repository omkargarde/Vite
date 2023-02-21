function AppHeader() {
  return (
    <>
      <header>
        <nav className="flex justify-between bg-white px-6 py-3   shadow-md">
          <button className=" rounded-md bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:opacity-80 hover:shadow-lg">
            button1
          </button>
          <button className="rounded-md bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:opacity-80 hover:shadow-lg">
            button2
          </button>
          <button className=" rounded-md bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:opacity-80 hover:shadow-lg">
            button3
          </button>
        </nav>
      </header>
    </>
  );
}
export default AppHeader;
