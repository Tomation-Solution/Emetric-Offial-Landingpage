import { NextPage } from 'next';
import BlogLayout from '../../layout/BlogLayout/BlogLayout';
import ExploreBlogTopics from '../../shared/ExploreBlogTopics/ExploreBlogTopics';
import PostPreview from '../../shared/PostPreview/PostPreview';



const BlogIndex:NextPage = ()=>{


  return (
    <BlogLayout>
      <br />

      <PostPreview/>
      <PostPreview variant='var2'/>

      <br />          

      <ExploreBlogTopics/> 
    </BlogLayout> 
  )
}

export default BlogIndex