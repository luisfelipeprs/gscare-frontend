import styled from "styled-components";

export const Container = styled.section`
    *{
        box-sizing: border-box;
    }

    width: 270px;
    height: 402px;
    padding: 40px 24px 50px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.30);
    border-radius: 16px;

    img {
        width: 140px;
        height: 140px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        width: 140px;
        height: 248px;

        a {
            margin-top: 24px;
            /* margin-bottom: 4px; */
            text-decoration: none;
            color: #032D60;
        }

        p:first-of-type {
            color: #181818;
            font-size: 0.95rem;
            margin-top: 8px;
            margin-bottom: 8px;
        }

        p:last-child {
            /* margin-top: 2px;  */
            font-size: 0.8rem;
            color: #747474;
            font-size: 14px;
        }

        p {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }

    }
`;

export const A = styled.a`
    margin-top: 32px;
    text-align: center;
    color: #032D60;
    font-weight: 700;
`;