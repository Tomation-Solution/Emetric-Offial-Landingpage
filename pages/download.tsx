import { useEffect } from 'react'

const Download =  ()=>{

  useEffect(()=>{
    if(window !=undefined){
      window.location.href='https://drive.google.com/file/d/1kmRtwUPBdJEgjVU8LDAxaxtV__6M7wQC/view'
    }
  },[])

  return (
    <div>
            
    </div>
  )
}

export default Download