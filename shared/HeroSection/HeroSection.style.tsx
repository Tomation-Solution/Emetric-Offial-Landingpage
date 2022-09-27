import styled from 'styled-components';


export const HeroSectionContainer =styled.div`
    padding: 1rem;
h1,p{
    color: ${(props)=>props.theme.text.thickText};
}

h1{
    font-size: 2rem;
    font-weight: 800;
    padding-bottom: .6rem;
}
button{
    width: 40%;
}
`


export const HeroSectionContentContainer =styled.div``

export const HeroSectionImageContainer =styled.div`
    position: relative;
    /* display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 30px;
   */
    height: 45vh;
    border: 1px solid red;
    width: 100%;
    margin:0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    .hero_main_img{
        width: 150px;
    }
    .container-img{
        background-color: #F5F5F5;
        width: 70px;
        height: 70px;
        padding: .7rem;
        border-radius: 50%;
        img{
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
    }
    .img_1{
        top: 30px;
        left: 35px;
        position: absolute;
        &::after{
            /* content: "";
            background-color: ${({theme})=>theme.main_color};
            width: 1px;
            height: 11px;
            transform: rotate(150deg);
            position: absolute;
            top: 46px;
            left: 70px; */
        }
    }
    .img_2{
        position: absolute;
        top: 30px;
        right: 10px;
    }
    .img_3{
        position: absolute;
        right: 0;
        bottom: 0px;
    }
    div.img_4{
        position: absolute;
       left: 30px;
        bottom:30px;
    }
`