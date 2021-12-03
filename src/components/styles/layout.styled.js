import styled from "styled-components";

export const Container = styled.div`
    margin-left:auto;
    margin-right:auto;
    padding-right:15px;
    padding-left:15px;
    width: 100%;
    max-width: 100%;
    @media only screen and (min-width: 769px) and (max-width: 992px){
        width:720px;
    }
    @media only screen and (min-width: 993px){
        width:960px;
      }
    @media only screen and (min-width: 1200px){
          width:1140px;
        }
    @media only screen and (min-width: 1600px){
          width:1340px;
        }
`

export const FlexBox = styled.div`
    display: flex;
    gap: ${(props) => props.gap || 0};
    justify-content: ${(props) => props.justify || 'center'};
    align-items: ${(props) => props.align || 'center'};
`