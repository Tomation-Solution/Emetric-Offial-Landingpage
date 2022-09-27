import styled from 'styled-components';



export const ListProductInfoContainter = styled.div`
    /*  */
    max-width: 1100px;
    padding: 1rem;
    border: 1px solid red;
    margin: 0 auto;
    h3{
        color: ${({theme})=>theme.text.thickText};
    }
    p{
        color: ${({theme})=>theme.text.normalText};
    }
`