import styled from 'styled-components';



export const BlogDetailMainImageContainer = styled.div`
    width: 100%;
    margin: 10px auto;
    border-radius: 20px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
    }
`

export const BlogHeaderContainer= styled.div`
    h2{
        font-size: 1.2rem;
        color: #072563;
    }
    &> div{

        padding: .8rem 0;
        display: flex;
        justify-content: space-between;
        width: 250px;
    }

    span{
        color: #072563;;
    }

`

export const ContentPane = styled.div`

    img{
        width: 80%;
        padding:.8rem 0;
        max-width: 400px;
        margin: 0 auto;
        display: block;
    }
`

export const BlogDetailContentContainer = styled.div`
        padding: 1rem ;
        max-width: 800px;

`