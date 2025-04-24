import { useParams } from "react-router-dom"
import { useProductsData } from "../../hooks/useProductsData"


const DetailsCard = () => {
    const {id} = useParams()
    const {data} = useProductsData()

    const productList = data?.results ?? [];
    const product = productList.find((item) => item.id === id);
    
    if (!product) {
      return <h2>Produto não encontrado</h2>;
    }

  return (
    
      <div className="containerDetailsCard" key={product.id}>
        <img src={product.thumbnail} alt={product.title} />
        <h2>{product.title}</h2>
      </div>
    
 
  )
}

export default DetailsCard
