import styled from 'styled-components'

export const MainDiv = styled.div`padding:40px;`;

export const MentorsDiv = styled.div`box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
position:relative; width:100%; height:80vh; display:flex; jsutify-content:center; 
align-items:center; overflow:hidden; 
:before{
    content:' ';
    position:absolute;
    top:0;
    left:0;
    width:80%;
    height:80%;
    background:#C5F8C7;
    border-radius:0 0 50% 50%/0 0 100% 100%;
    margin-left:215px;
}`;

export const CircleDiv = styled.div`position:relative; z-index:1;
margin:0 auto; max-width:900px; text-align:center;`;

export const ContentDiv = styled.div``;

export const P = styled.p`margin:0; padding:0; color:#fff; font-size:2em;`;