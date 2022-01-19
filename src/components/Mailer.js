import styled from "styled-components";

const Mailer = styled.div`
    margin: auto;
    background: linear-gradient(15deg, #530382 0%, palevioletred 100%);
    margin-bottom: 20px;
    border-radius: 20px;
    box-shadow: 0 5px 2px palevioletred;
        h1{
            text-align: center;
            color: #FFFFFF;
            margin: 10px;
        }
        form{
            margin: 10px 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        label{
            margin: 10px;
            color: #FFFFFF;
        }
        input{
            padding-left: 15px;
            height: 25px;
            width: 250px;
            border: none;
            border-radius: 15px;
            outline: 0;
        }
        textarea{
            padding: 10px;
            height: 200px;
            width: 300px;
            border-radius: 15px;
            outline: 0;
        }
        .submit{
            height: 40px;
            width: 150px;
            background: #171716;
            color: #FFFFFF;
            font-size: 16px;
            cursor: pointer;
            margin: 15px;
            border: none;
            border-radius: 10px;
            transition: 0.3s ease;
        }
        .submit:hover{
            transform: scale(1.05);
            background: palevioletred;
            font-weight: bold;
        }
`

export default Mailer