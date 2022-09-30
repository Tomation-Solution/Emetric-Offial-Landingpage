import BlogLayout from '../../layout/BlogLayout/BlogLayout'
import { BlogDetailContentContainer, BlogDetailMainImageContainer, BlogHeaderContainer, ContentPane } from '../../styles/BlogDetail.style'
import blogDummy from '../../assets/blogDummy.png'
import Dummy from '../../assets/dummy.png'





const BlogDetail = ():React.ReactElement=>{


  return (
    <BlogLayout>
      <BlogDetailContentContainer>
        <BlogDetailMainImageContainer>
          <img src={blogDummy.src} alt="" />
        </BlogDetailMainImageContainer>   

        <BlogHeaderContainer>
          <h2>MANAGING SUBJECTIVITY IN EMPLOYEE RATING</h2>
          <div>
            <p>05/08/2022</p>
            <p><strong>writer: </strong><span>Emmanuel </span></p>
          </div>
          <p><strong>HR Management/10 Mins Read</strong></p>
        </BlogHeaderContainer>


        <ContentPane>
          <img src={''} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid soluta molestiae, ipsum fugit accusantium, nihil in voluptates obcaecati adipisci exercitationem veritatis at rerum quisquam distinctio totam quia velit ipsa, quo pariatur commodi? Unde distinctio nulla sequi et soluta necessitatibus harum optio odit porro id enim excepturi fugit, neque, repellat voluptatum.</p>
        </ContentPane>

        <ContentPane>
          <img src={Dummy.src} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid soluta molestiae, ipsum fugit accusantium, nihil in voluptates obcaecati adipisci exercitationem veritatis at rerum quisquam distinctio totam quia velit ipsa, quo pariatur commodi? Unde distinctio nulla sequi et soluta necessitatibus harum optio odit porro id enim excepturi fugit, neque, repellat voluptatum.</p>
        </ContentPane>
      </BlogDetailContentContainer>
    </BlogLayout>
  )
}

export default BlogDetail