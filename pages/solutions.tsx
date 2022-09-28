import { NextPage } from 'next';
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout';
import ProductInfo from '../shared/ProductInfo/ProductInfo';
import hr_image from '../assets/hr_image.jpeg'





const Solutions:NextPage = ()=>{


  return (
    <GeneralLayout>
      <ProductInfo
        heading='HR Administration'
        body={`
        Be on top of your game by relying on our automated HR tasks management system designed to suit your operational needs.

        You will also be able to manage your employee records with just a click, saving yourself the stress of searching and combing through loads of documents per time.
        `}
        image={hr_image.src}
      />
    </GeneralLayout>
  )
}

export default Solutions