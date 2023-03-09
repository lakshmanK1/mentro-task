import styled from 'styled-components'
import {keyframes} from 'styled-components'

export const rotate = keyframes`
    100%{
        transform:rotate(1turn) translate(100px) rotate(-1turn)
    }
`;

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

export const SpinnerDiv = styled.div`--n:5; --d:12s; width:200px; height:200px; margin:40px auto; border:1px solid #000;
display:grid; grid-template-columns:30px; grid-template-rows:30px; place-content:center; 
border-radius:50%;`;

export const RoundDiv = styled.div`grid-area:1/1; line-height:30px; text-align: center; border-radius:50%; background:#f00; 
animation: ${rotate} var(--d) linear infinite; transform: rotate(0) translate(100px) rotate(0);
:nth-child(1) {animation-delay:calc(-0*var(--d)/var(--n))}
:nth-child(2) {animation-delay:calc(-1*var(--d)/var(--n))}
:nth-child(3) {animation-delay:calc(-2*var(--d)/var(--n))}
:nth-child(4) {animation-delay:calc(-3*var(--d)/var(--n))}
:nth-child(5) {animation-delay:calc(-4*var(--d)/var(--n))}`;

