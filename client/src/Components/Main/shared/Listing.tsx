import Card from "./Card";

export default function Listing(props: any) {
  let { data, searchTerm, color, gender, type } = props;

  function filterSearchTerm(post: any) {
    if (searchTerm !== "") {
      return (
        post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (color !== "" || gender !== "" || type !== "") {
      return (
        post.color.toLowerCase().includes(color.toLowerCase()) &&
        post.gender.toLowerCase().includes(gender.toLowerCase()) &&
        post.type.toLowerCase().includes(type.toLowerCase())
      );
    }
    return post;
  }

  return (
    <>
      <div className="mx-auto grid  gap-6 px-3 sm:grid-cols-2 lg:grid-cols-5">
        {data
          .filter((post: any) => filterSearchTerm(post))
          .map((post: any, index: any) => {
            return <Card key={index} card={post}></Card>;
          })}
      </div>
    </>
  );
}
