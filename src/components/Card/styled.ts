import styled from "styled-components";

export const Container = styled.section`
    width: 370px;
    height: 440px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.30);
    
    img{
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
        width: 250px;
        height: 250px;
    }

    div{
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 20px;

        a{
            &:first-child {
                font-size: 20px;
                text-decoration: none;
                color: #032d60;
            }

            &:last-child{
                color: #032d60;
            }
    }

    }

    
`;