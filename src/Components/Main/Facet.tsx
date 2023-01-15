export default function Facet() {
  return (
    <div className="p-6 m-6 rounded-lg shadow-md bg-neutral-50">
      {/* color */}
      <div>Color</div>
      <label className="pl-1 ">
        <input className="ml-1" type="checkbox"></input>
        Red
      </label>
      <br></br>
      <label className="pl-1">
        <input className="ml-1" type="checkbox"></input>
        Blue
      </label>
      <br></br>
      <label className="pl-1">
        <input className="ml-1" type="checkbox"></input>
        Green
      </label>
      <br />
      {/* Gender */}
      <div>Gender</div>{" "}
      <label className="pl-1">
        <input className="ml-1" type="checkbox"></input>
        male
      </label>
      <br></br>
      <label className="pl-1">
        <input className="ml-1" type="checkbox"></input>
        female
      </label>
      {/* Price */}
      <div>Price</div>
      <label className="pl-1">
        <input className="ml-1" type="checkbox"></input>
        0-250rs
      </label>
      <br></br>
      <label className="pl-1">
        <input className="ml-1" type="checkbox"></input>
        251-500
      </label>
      <br></br>
      {/* Type */}
      <div>Type</div>
      <label className="pl-1">
        <input className="ml-1" type="checkbox"></input>
        Polo
      </label>
      <br></br>
      <label className="pl-1">
        <input className="ml-1" type="checkbox"></input>
        Hoodie
      </label>
      <br></br>
      <label className="pl-1">
        <input className="ml-1" type="checkbox"></input>
        Basic
      </label>
      <br></br>
    </div>
  );
}
