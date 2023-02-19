export default function SearchBox(props: any) {
  const setSearchTerm = props.setSearchTerm;
  function updateValue(value: string) {
    setSearchTerm(value);
  }
  return (
    <div className="col-span-1 ">
      <input
        className="my-6  inline-block w-full rounded-md border-transparent bg-white py-2 text-center text-xl shadow-md hover:border-gray-300"
        id="searchBox"
        type="text"
        name="searchBox"
        placeholder="Search"
        required={true}
        autoFocus={true}
        onChange={(event) => updateValue(event.target.value)}
      />
    </div>
    // TODO add when dark mode is needed
    // dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:focus:border-gray-700
  );
}
