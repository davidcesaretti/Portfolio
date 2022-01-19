import styled from 'styled-components'

const NavBar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    background: #171716;
    border-bottom: 1px solid rgba(227, 227, 227, 0.3);
    z-index: 10;
    button{
        position: relative;
        height: 40px;
        color: #FFFFFF;
        background: #171716;
        font-size: 18px;
        font-weight: bold;
        padding: 5px 15px;
        margin: 0 10px;
        border: none;
        cursor: pointer;
        z-index: 2;

        &::before{
            position: absolute;
            content: '';
            height: 40px;background: #530382;
            background: linear-gradient(90deg, #530382 0%, palevioletred 100%);
            display: block;
            bottom: 0;
            left: 0;
            right: 0;
            border-radius: 10px;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.5s ease;
            z-index: -1;
        }
        &:hover::before{
            transform: scaleX(1);
            transform-origin: left;
        }
    }
    a{
        color: #FFFFFF;
        text-decoration: none;
    }
`

export default NavBar