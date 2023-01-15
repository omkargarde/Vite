import { useQuery } from "react-query";
import { getData } from "../endpoints/GetApi";
import Card from "./Card";
import Facet from "./Facet";
export default function AppMain() {
  const { data, error, isError, isLoading, refetch } = useQuery(
    // first argument is a string to cache and track the query result
    "posts",
    // second argument is query fn,(axios,fetch etc)
    getData
  );
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
        <h1>Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 ">
          {data.map((post: any, index: any) => {
            return <Card key={index} card={post}></Card>;
          })}
        </div>
      </div>
    </div>
  );
}
