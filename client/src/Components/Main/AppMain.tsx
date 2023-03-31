import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getData } from "../endpoints/GetApi";
import DropDown from "./shared/DropDown";
import Listing from "./shared/Listing";
import SearchBox from "./shared/SearchBox";

export default function AppMain() {
  const { data, error, isError, isLoading, refetch } = useQuery(
    // first argument is a string to cache and track the query result
    "posts",
    // second argument is query fn,(axios,fetch etc)
    getData
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [color, setColor] = useState("");
  const [gender, setGender] = useState("");
  const [type, setType] = useState("");
  const [update, setUpdate] = useState(true);
  useEffect(() => {
    if (searchTerm === "") {
      return;
    }
    setColor("");
    setGender("");
    setType("");
  }, [searchTerm]);
  useEffect(() => {
    setSearchTerm("");
  }, [color, gender, type]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    // @ts-ignore error
    return <div>Error! {error.message}</div>;
  }

  return (
    <div className="flex">
      <div className="w-full">
        <div className="mx-auto  md:w-1/2">
          <div className="my-6 rounded-xl  bg-neutral-50 px-6 shadow-lg">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              <SearchBox
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              ></SearchBox>
              <DropDown
                color={color}
                gender={gender}
                type={type}
                setColor={setColor}
                setGender={setGender}
                setType={setType}
              ></DropDown>
            </div>
          </div>
        </div>

        <Listing
          searchTerm={searchTerm}
          data={data}
          color={color}
          gender={gender}
          type={type}
        ></Listing>
      </div>
    </div>
  );
}
