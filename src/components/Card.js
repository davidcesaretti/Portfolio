import styled from "styled-components";

const Card = styled.div`
    display: flex;
    border-radius: 15px;
    background-color: #FFFFFF;
    width: 800px;
    box-shadow: 10px 10px 1px #530382;
    margin: auto;
    margin-top: 100px;
    transition: 0.3s ease;
    margin-bottom: 30px;
        div{
            width: 50%;
            padding: 10px 15px; 
        }
        h1{
            font-size: 50px;
            background: -webkit-linear-gradient(right, #530382, palevioletred);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        p{
            font-size: 18px;
        }
        img{
            width: 50%;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
            overflow: hidden;
        }
        :hover{
            transform: scale(1.05);
        }
        @media(max-width: 800px){
            flex-direction: column;
            width: 400px;
            div{
                width: 100%;
            }
            img{
                width: 100%;
                border-top-right-radius: 0px;
                border-bottom-right-radius: 15px;
                border-bottom-left-radius: 15px;
            }
        }
`

export default Card