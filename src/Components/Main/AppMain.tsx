import { useState } from "react";
import { useQuery } from "react-query";
import { getData } from "../endpoints/GetApi";
import Card from "./Card";
import Facet from "./Facet";
import SearchBox from "./shared/SearchBox";
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
      <div className="w-2/12">
        <Facet></Facet>
      </div>
      <div>
        {/* lifting stateUp */}
        <SearchBox
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        ></SearchBox>
        <div className="mx-auto grid grid-cols-1 gap-6 px-3 sm:grid-cols-2 lg:grid-cols-5">
          {data.map((post: any, index: any) => {
            return <Card key={index} card={post}></Card>;
          })}
        </div>
      </div>
    </div>
  );
}
