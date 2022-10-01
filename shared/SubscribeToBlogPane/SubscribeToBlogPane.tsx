import SearchInput from '../SearchInput/SearchInput'
import { SubscribeCover, SubscribeToBlogContainer } from './SubscribeToBlogPane.style'



const SubscribeToBlogPane = ():React.ReactElement=>{



  return (
    <SubscribeCover>
      <SubscribeToBlogContainer>
        <h2>Subscribe to Our Blog</h2>
        <p>Stay up to date with the latest marketing, sales, and service tips and news.</p>

        <SearchInput/>
      </SubscribeToBlogContainer>
    </SubscribeCover>
  )
}

export default SubscribeToBlogPane