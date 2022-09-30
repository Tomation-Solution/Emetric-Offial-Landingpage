import React from 'react'
import BlogNav from '../../shared/BlogNav/BlogNav'
import Footer from '../../shared/Footer/Footer'
import Nav from '../../shared/Nav/Nav'



type Prop = React.PropsWithChildren<{
    
}>
const BlogLayout = ({ children }:Prop):React.ReactElement=>{


  return (
    <div>
      <Nav/>
      <BlogNav/>
      {children} 


      <Footer/>
    </div>
  )
}


export default BlogLayout