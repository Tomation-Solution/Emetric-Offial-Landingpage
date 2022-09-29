import { NextPage } from 'next'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import { ParthersFormContainer, ParthersHeroContainer, ParthersHeroContentContainer, ParthersHeroImgContainer } from '../styles/parthers.style'
import parthers1 from '../assets/parthers1.png'
import parthers2 from '../assets/parthers2.png'
import Button from '../shared/Button/Button'
import InputWithLabel from '../shared/InputWithLabel/InputWithLabel'






const Parthers:NextPage = ()=>{


  return (
    <GeneralLayout>
      <ParthersHeroContainer>
        <ParthersHeroContentContainer>
          <h2>
            Join Our Growing List of  Parthers Across the Globe
          </h2>
          <br />
          <p>
          Join our growing list of partners across the globe and stand the chance of becoming our country representative in your country. This position offers you the opportunity of working in one of the fastest growing organization in the performance management industry. Our partners are technically referred to as Value Added Partners (VAP). As a VAP, you are expected to market the solution to companies in your country, make demo presentations, follow up on them for sales, help with deployment and ultimately manage the clients.
          </p>
        </ParthersHeroContentContainer>
        {/* <br /><br /> */}
        <ParthersHeroImgContainer>
          <img src={parthers2.src} alt="" />
          <img src={parthers1.src} alt="" />
        </ParthersHeroImgContainer>
      </ParthersHeroContainer>

      <br />
      
      <ParthersFormContainer>
        <h3>Become our parther</h3>
        <p>Download to read more about our partnership scheme</p>
        {/* <Button styleType={'sec'}>
                Download now
        </Button> */}
        <br />

        <form action="">
          <InputWithLabel
            label='Name'
            placeholder='enter name'  
          />
          <br />

          <InputWithLabel
            label='E-mail'
            placeholder='enter email'
            type='email'  
          />
          <br />

          <p>
            Please agree to our partnership  <span>
            terms  and conditions </span>before submitting this form.
          </p>
          <br />
          <Button>
                Submit
          </Button>

        </form>
      </ParthersFormContainer>
    </GeneralLayout>
  )
}

export default Parthers