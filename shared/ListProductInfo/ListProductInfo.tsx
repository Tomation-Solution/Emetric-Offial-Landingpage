import ProductInfo from '../ProductInfo/ProductInfo'
import { ListProductInfoContainter } from './ListProductInfo.style'





const ListProductInfo= ():React.ReactElement=>{


  return (
    <ListProductInfoContainter>
      <h3>Our Products</h3>
      <p>Link your workforce{'’'}s operational activities with your goals{' & '}objectives on the go.</p>
    
    
      <br /><br />
      <ProductInfo/>
    </ListProductInfoContainter>
  )
}

export default ListProductInfo