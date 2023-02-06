const Color = ["red", "Grey", "black", "blue"];
const Gender = ["men", "women", "other"];
const Type = ["polo", "basic", "hoodie"];

export default function DropDown(props: any) {
  const { color, gender, type, setColor, setGender, setType } = props;
  setColor(color);
  setGender(gender);
  setType(type);
  const colorDropDown = (
    <select
      className="shadow-outline my-6 inline-flex h-10 w-full items-center rounded-lg bg-white pl-1  text-sm font-medium text-gray-800 shadow-lg transition-colors duration-150 hover:opacity-80"
      value={color} // ...force the select's value to match the state variable...
      onChange={(e) => setColor(e.target.value)} // ... and update the state variable on any change!
    >
      <option value="">Select Color</option>
      {Color.map((color) => (
        <option key={color} value={color}>
          {color}
        </option>
      ))}
    </select>
  );
  const genderDropDown = (
    <select
      className="shadow-outline  my-6 inline-flex h-10 w-full items-center rounded-lg bg-white pl-1  text-sm font-medium text-gray-800 shadow-lg transition-colors duration-150 hover:opacity-80"
      value={gender}
      onChange={(e) => setGender(e.target.value)}
    >
      <option value="">Select Gender</option>
      {Gender.map((gender) => (
        <option key={gender} value={gender}>
          {gender}
        </option>
      ))}
    </select>
  );
  const typeDropDown = (
    <>
      <select
        className="shadow-outline  my-6 inline-flex h-10 w-full items-center rounded-lg bg-white pl-1  text-sm font-medium text-gray-800 shadow-lg transition-colors duration-150 hover:opacity-80"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Select Type</option>
        {Type.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </>
  );
  return (
    <>
      <div className="col-span-auto">{colorDropDown}</div>
      <div className="col-span-auto">{typeDropDown}</div>
      <div className="col-span-auto">{genderDropDown}</div>
    </>
  );
}
