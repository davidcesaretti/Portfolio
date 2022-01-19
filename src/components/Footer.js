import styled from "styled-components";

const Footer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    padding-top: 40px;
    width: 100%;
    height: 150px;
    background-color: #171716;
    color: #FFFFFF;
    clip-path: polygon(0px 15%, 100% 0px, 100% 100%, 0% 100%);
        &::before{
            position: absolute;
            content: '';
            height: 40px;background: #530382;
            background: linear-gradient(90deg, #530382 0%, palevioletred 100%);
            display: block;
            top: 0;
            left: 0;
            right: 0;
            clip-path: polygon(0px 15%, 100% 0px, 100% 50%, 0% 100%);
        }
        h4{
            font-size: 30px;
            margin: 0;
        }
        a:hover{
            color: palevioletred;
        }
        .icons{
            width: 150px;
            display: flex;
            justify-content: space-around;
        }
        .icon{
            height: 40px;
            width: 40px;
        }
        a{
            text-decoration: none;
            color: #FFFFFF;
        }
        
`

export default Footer