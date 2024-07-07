import styled from "styled-components";


export const BoxCountStyle = styled.div`

    width: 100%;
    border-radius: 1.8rem;
    box-sizing: border-box;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-shadow:
        0 10px 15px -3px rgb(0 0 0 / 0.25),
        0 4px 6px -4px rgb(0 0 0 / 0.1);

    .box_count_header{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        img{
            width: 2rem;
        }
    }

    .box_count_content{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        span{
            font-size: 3.5rem;
            text-align: center;
            font-family: 'Inter';
            font-weight: 900;
        }
    }

`