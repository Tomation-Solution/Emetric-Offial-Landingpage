import { NextPage } from 'next';
import { FlexInput, LoginContainer, LoginContainerImg, LoginContentContainer, LoginNav } from '../styles/Booking.style';
// 
import bookingsImag from  '../assets/bookingsImag.jpg'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout';
import InputWithLabel from '../shared/InputWithLabel/InputWithLabel';
import Button from '../shared/Button/Button';





const ContactPage:NextPage = ()=>{


  return (
    <GeneralLayout>

      <LoginContainer viewHieght={204}>
        <LoginContainerImg image={bookingsImag.src}>
        </LoginContainerImg>

        <LoginContentContainer>
          <LoginNav>
            <div>
              <h2>Contact us today</h2>
              <br />
              <p>We{'\''}re available from 9 AM to 5 PM (UTC +1). Call us; we{'\''}re happy to help you meet your HR automation needs.</p>
              <br />
              <Button style={{'width':'40%'}}>+2340000000000</Button>
            </div>

          </LoginNav>

          <form>
            {/* <FlexInput>

            </FlexInput> */}
            <InputWithLabel
              label='First Name' 
              placeholder='Enter a First Name' 
            />
            <br />
            <InputWithLabel
              label='Last Name' 
              placeholder='Enter a Last Name' 
            />
            <br />
            <InputWithLabel
              label='Work e-mail' 
              type='email'
              placeholder='Enter a work e-mail' 
            />
            <br />
            <InputWithLabel
              label='Phone Number' 
              placeholder='Enter a work phone number' 
            />
            <br />
            <InputWithLabel
              label='Organiation Name' 
              placeholder='Enter a work organiation name' 
            />
            <br />
            <InputWithLabel
              label='Organization Size' 
              placeholder='Enter a work organiation name' 
            />

            <br />
            <InputWithLabel
              label='Job Title' 
              placeholder='Enter a work job title' 
            />

            <br />
            <InputWithLabel
              label='Country' 
              placeholder='Enter a work country' 
            />

            <br />
            <InputWithLabel
              label='hear' 
              placeholder='How did you hear about us?' 
            />
            <br />
            <InputWithLabel
              isTextArea={true}
              label='message' 
              placeholder='Message' 
            />
          </form>
        </LoginContentContainer>
      </LoginContainer>
    </GeneralLayout>
  )
}
export default ContactPage