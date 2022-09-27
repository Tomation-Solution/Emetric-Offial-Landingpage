import styled from 'styled-components';



export const NavContainer=styled.div`
/* border: 1px solid red; */
padding: .8rem 1rem;
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
box-shadow: 0px 4px 4px rgba(20, 166, 229, 0.048);

svg{
    font-weight: 100;
    color: ${({theme})=>theme.text.normalText};
    cursor: pointer;
}

@media screen and (min-width: 800px){
    padding: .8rem 3rem;
    svg{
        display: none;
    }
}
`
type NavSecondPartProp={
    showMobileLink?:boolean;
}
export const NavSecondPart =styled.div<NavSecondPartProp>`
 position:fixed;
/* border: 1px solid yellow;  */

height: 100vh;
width: 60%;
top: 0;
right: 0;
padding: 1rem;
background-color: ${props=>props.theme.background};
transition: all .4s ease-in-out;
${
  (prop)=>{
    if(prop.showMobileLink){
      return `
    box-shadow: 0px 4px 4px rgba(20, 166, 229, 0.096);
      transform: translateX(0); `
    }else{
      return 'transform: translateX(100%);'
    }
  }
}
svg{
    display: block;
    margin-left: auto;
}

@media screen and (min-width: 800px) {
    /* border:1px solid red; */
    padding:0;
    transform: translateX(0);
    position:static;
    width: 80%;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    svg{
        display:none
    }
}

`
export const NavLogoContainer=styled.div``


export const NavLinksContainer=styled.ul`
    color: ${({theme})=>theme.text.lightText};
    li{
        padding: .8rem 0;
    }

    @media screen and (min-width: 800px){
        display: flex;
        justify-content: space-between;
        width: 60%;
    }

    @media screen and (min-width: 1200px){
        width: 500px;
    }

`
export const NavBtnContainer=styled.div`
    margin-top: 1rem;
    color: ${({theme})=>theme.text.lightText};

    li{
        padding: 2rem 0;
    }
    @media screen and (min-width: 800px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* border: 1px solid red; */
        width: 35%;
    margin-top: unset;

        li{
            padding: 0 .2rem;
            width: 30%;
        }
        button{
            width: 65%;
        }
    }

    @media screen and (min-width: 1200px){
        width: 300px;
        li{
            padding: 0 .2rem;
            width: 30%;
        }
        button{
            width: 50%;
        }
    }
`
