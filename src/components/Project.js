import styled from "styled-components";

const Project = styled.div`
    position: relative;
    width: 330px;
    height: 467px;
    background: #FFFFFF;
    color: #000000;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    transition: 0.3s ease;
    box-shadow: 5px 5px 1px #530382;
    margin: 20px;
        img{
            width: 330px;
            height: 40%;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
        }
        ul{
            height: 80px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
        }
        .description{
            width: 100%;
            height: 60%;
            padding: 10px 15px;
        }
        .description h4{
            text-align: center;
            font-size: 18px;
            font-weight: bold;
        }
        .detalles{
            position: absolute;
            background-color: #000000;
            color: palevioletred;
            width: 100%;
            height: 280px;
            padding: 10px 15px;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            transition: 0.3s ease;
            display: none;
        }
        .detalles h4{
            text-align: center;
            font-size: 18px;
            font-weight: bold;
        }
        .detalles li{
            list-style-type: none;
            margin-left: 20px;
        }
        .link{
            text-align: center;
            display: flex;
            flex-direction: column;
        }
        .link a{
            text-decoration: none;
            color: #FFFFFF;
            font-weight: bold;
            padding: 5px;
            border-bottom: 1px solid palevioletred;
        }
        :hover{
            .detalles{
                display: block;
            }
        }
`

export default Project