import Button from '../Button/Button'
import { PostPreviewContainer, PostPreviewContentContainer, PostPreviewImageContainer } from './PostPreview.style'
import Image from '../../assets/blog1.png' 

type Prop = {
    variant?:'var1'|'var2'
}

const PostPreview = ({ variant ='var1'}:Prop):React.ReactElement=>{



  return (
    <PostPreviewContainer   variant={variant}>
      <PostPreviewImageContainer variant={variant}>
        <img src={Image.src} alt="" />
      </PostPreviewImageContainer>
      <br />
      <PostPreviewContentContainer>
        <h2>MANAGING SUBJECTIVITY IN EMPLOYEE RATING</h2>
        <p>The existence of subjectivity in rating is a common knowledge. This is one major set-back encountered during appraisals where managers bring in some element of prejudice or bias when rating their subordinates.</p>
        <Button styleType='sec'>Read more</Button>
        <p><strong>HR Management/10 Mins Read</strong></p>
      </PostPreviewContentContainer>
    </PostPreviewContainer>
  )
}

export default PostPreview