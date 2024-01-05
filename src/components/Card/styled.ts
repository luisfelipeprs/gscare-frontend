import styled from "styled-components";

export const Container = styled.section`
    max-width: calc(1280px / 4);
    width: 100%;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.30);
    /* margin: 0 15px; */
    /* gap: 20px; */
    
    img {
        width: 100%;
        height: auto;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
    }

    div {
        padding: 20px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: start;
        /* margin: 20px; */

        a:first-child {
            font-size: 1rem;
            text-decoration: none;
            font-weight: bold;
            color: #032d60;
        }

        a:last-child {
            color: #032d60;
            font-size: 1rem;
            font-weight: bold;
        }
    }
`;