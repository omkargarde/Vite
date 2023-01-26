import { useState } from "react";
import { useQuery } from "react-query";
import { getData } from "../endpoints/GetApi";
import Card from "./shared/Card";
import Facet from "./Facet";
import SearchBox from "./shared/SearchBox";
import Listing from "./shared/Listing";
export default function AppMain() {
  const { data, error, isError, isLoading, refetch } = useQuery(
    // first argument is a string to cache and track the query result
    "posts",
    // second argument is query fn,(axios,fetch etc)
    getData
  );

  const [searchTerm, setSearchTerm] = useState("");
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    // @ts-ignore error
    return <div>Error! {error.message}</div>;
  }
  return (
    <div className="flex">
      {/* <div className="w-2/12">
        <Facet></Facet>
      </div> */}
      <div className="w-full">
        <div className="mx-auto w-11/12 md:w-1/2">
          {/* lifting stateUp */}
          <SearchBox
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          ></SearchBox>
        </div>
        <Listing searchTerm={searchTerm} data={data}></Listing>
      </div>
    </div>
  );
}
