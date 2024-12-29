import { useProductsData } from "../hooks/useProductsData";

const Headphones = () => {
  const { data } = useProductsData("fones");
  console.log("data: ", data);
  console.log("results: ", data?.results);

  return (
    <div>
      {data?.results.map((dt) => (
        <div className="card" key={dt.id}>
          <img src={dt.thumbnail} alt="" />
          <h3>{dt.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default Headphones;
