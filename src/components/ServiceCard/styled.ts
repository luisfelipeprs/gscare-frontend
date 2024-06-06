import styled from "styled-components";

export const Container = styled.section`
    *{
        box-sizing: border-box;
    }

    width: 259px;
    height: 370px;
    border-radius: 12px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.30);
    
    img {
        width: 100%;
        height: 145px;
        border-radius: 12px 12px  0 0;
    }

`;

export const ContainerText = styled.div`
    width: 100%;
    height: 132px;
    padding: 24px;

    a{
        text-decoration: none;
        color: #071a25a8;
        font-size: 0.9rem;
    }

    p{
        margin-top: 16px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const TextSolucion = styled.div`
    padding-top: 12px;
    text-align: center;
`;
