import Nav from '../../shared/Nav/Nav'




type Prop = React.PropsWithChildren<{

}>

const  GeneralLayout = ({children}:Prop):React.ReactElement=>{


  return (
    <div>
      <Nav/>
    </div>
  )
}

export default GeneralLayout