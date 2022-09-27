import { NavBtnContainer, NavContainer, NavLinksContainer, NavLogoContainer } from "./Nav.style"






const Nav = ():React.ReactElement=>{


    return (
        <NavContainer>
            <NavLogoContainer>
                <img src="" alt="" />
            </NavLogoContainer>

            <NavLinksContainer>
                <li><a href="#">Products</a></li>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Our Parthers</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
            </NavLinksContainer>


            <NavBtnContainer>
                <li><a href="">Sign In</a></li>
                <button>Request Demo</button>
            </NavBtnContainer>

        </NavContainer>
    )
}

export default Nav