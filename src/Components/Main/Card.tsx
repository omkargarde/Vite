import { BiRupee } from "react-icons/bi";
export default function Card(props: any) {
  const card = props.card;
  return (
    <>
      <div className="flex flex-col xl:flex-column shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
        <img
          className="object-cover w-full h-48"
          src={card.imageURL}
          alt="Flower and sky"
        />

        <div className="relative p-4">
          <h3 className="text-base md:text-xl font-medium text-gray-800">
            {card.name}
          </h3>

          <p className="mt-4 text-base md:text-lg text-gray-600 flex content-center items-center">
            <BiRupee /> <span className="">{card.price}</span>
            <button className="ml-auto px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:opacity-80 text-gray-800 text-sm font-medium rounded-md hover:shadow-lg">
              Add to cart
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
