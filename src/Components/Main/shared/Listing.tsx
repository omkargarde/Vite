import Card from "./Card";

export default function Listing(props: any) {
  let data = props.data;
  let searchTerm = props.searchTerm;
  return (
    <>
      <div className="mx-auto grid grid-cols-1 gap-6 px-3 sm:grid-cols-2 lg:grid-cols-5">
        {data
          .filter((post: any) => {
            if (searchTerm === "") {
              return post;
            } else if (
              post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              post.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
              post.type.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return post;
            }
          })
          .map((post: any, index: any) => {
            return <Card key={index} card={post}></Card>;
          })}
      </div>
    </>
  );
}
