import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import BlogLayout from '../../layout/BlogLayout/BlogLayout';
import api from '../../services/api';
import ExploreBlogTopics from '../../shared/ExploreBlogTopics/ExploreBlogTopics';
import PostPreview from '../../shared/PostPreview/PostPreview';



const BlogIndex:NextPage = ()=>{
  const [loading,setLoading] = useState(false)
  const getBlogs = async()=>{
    setLoading(true)
    console.log()
    const resp = await api.get('blog/blog-view/')
    setLoading(false)

    console.log(resp)
      
  }

  useEffect(()=>{
    getBlogs()
  },[])
  return (
    <BlogLayout>
      <br />
      {loading &&<h1>Loading..</h1>}
      <PostPreview/>
      <PostPreview variant='var2'/>

      <br />          

      <ExploreBlogTopics/> 
    </BlogLayout> 
  )
}

export default BlogIndex