import React from 'react'
import Button from '../Button/Button'
import SearchInput from '../SearchInput/SearchInput'
import { BlogNavCategorieslink, BlogNavContainer, Categorieslink } from './BlogNav.style'




export const BlogNav= ():React.ReactElement=>{



  return (
    <BlogNavContainer>

      <BlogNavCategorieslink>
        <Categorieslink>
          All Post
        </Categorieslink>
        <Categorieslink>
          Marketing
        </Categorieslink>

        <Categorieslink>
          Sales
        </Categorieslink>
        <Categorieslink>
          Services
        </Categorieslink>

        <Categorieslink>
          Website
        </Categorieslink>
       
      </BlogNavCategorieslink>
      <br />

      <SearchInput/>
    </BlogNavContainer>
  )
}

export default BlogNav