import { BiRupee } from "react-icons/bi";
export default function Card(props: any) {
  const card = props.card;
  return (
    <>
      <div className="xl:flex-column flex w-full flex-col overflow-hidden rounded-lg bg-white shadow hover:shadow-md ">
        <img className="h-48" src={card.imageURL} alt="Flower and sky" />

        <div className=" p-4">
          <h3 className="text-base font-medium text-gray-800 md:text-xl">
            {card.name}
          </h3>
          <p>{card.color}</p>
          <p>{card.gender}</p>
          <p>{card.type}</p>
          <p className="mt-4 flex content-center items-center text-base text-gray-600 md:text-lg">
            <BiRupee /> <span className="">{card.price}</span>
            <button className="ml-auto rounded-md bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:opacity-80 hover:shadow-lg">
              Add to cart
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
