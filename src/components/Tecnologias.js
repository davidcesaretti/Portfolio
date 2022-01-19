import styled from "styled-components";

const Tecnologias = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
        div{
            background-color: #e3e3e3;
            border-radius: 15px;
            width: 1000px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 10px 10px 1px #530382;
            padding: 40px;
        }
        span{
            margin-top: 10px;
        }
        .icons{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
        .icon{
            height: 170px;
            width: 130px;
            display: flex;
            flex-direction: column;
            padding: 10px 15px;
            margin: 20px;
            border-radius: 15px;
            color: palevioletred;
            background: #000000;
            transition: 0.3s ease;
            clip-path: polygon(10px 10%, 100% 0px, 90% 90%, 0% 100%);
            border: 3px solid #530382;
            
        }
        .icon:hover{
            transform: scale(1.1);
            color: palevioletred;
            background: #000000;
            clip-path: polygon(0px 0%, 90% 10px, 100% 100%, 10% 90%);
        }
`

export default Tecnologias