import Button from '../Button/Button'
import { ProductInfoContentContainer, ProductInfoImageContainer, ProductInfoMainContainer ,ProductInfoCover} from './ProductInfo.style'
import rounded_transparent from '../../assets/rounded-transparent.png'
import { handleDemo } from '../../utils/extraFunction';


type Prop ={
  heading:string;
  body:string;
  image:string
  variant?:'var1' | 'var2'
}
const ProductInfo = ({heading,body,image,variant='var1'}:Prop):React.ReactElement=>{

  return(
    <ProductInfoCover variant={variant}>
      <img className='rounded_transparent_svg' src={rounded_transparent.src} alt="" />
      <ProductInfoMainContainer variant={variant}>
        <ProductInfoImageContainer>
          <img src={image} alt="" />
        </ProductInfoImageContainer>
        <ProductInfoContentContainer>
          <h2>{heading}</h2>
          <p>
            {body}
          </p>
          <br />
          <Button onClick={handleDemo}>
          Get Started
          </Button>
        </ProductInfoContentContainer>
      </ProductInfoMainContainer>  
    </ProductInfoCover>
  )
}

export default ProductInfo