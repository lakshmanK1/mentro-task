import styled from 'styled-components'
import {keyframes} from 'styled-components'

export const rotate = keyframes`
    30%{
        transform:rotate(1turn) translate(100px) rotate(-1turn)
    }
`;

export const MainDiv = styled.div`padding:40px;`;

export const MentorsDiv = styled.div`box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
position:relative; width:100%; height:80vh; display:flex; jsutify-content:center; 
align-items:center; overflow:hidden;
`;

export const GreenDiv = styled.div`
display:flex; jsutify-content:center; 
align-items:center; 
:before{
    content:' ';
    position:absolute;
    top:0;
    left:0;
    width:1100px;
    height:80%;
    background:#C5F8C7;
    border-radius:0 0 50% 50%/0 0 100% 100%;
    margin-left:200px;
 
}`;


export const CircleDiv = styled.div`position:relative; z-index:1;
margin:0 auto; max-width:900px; text-align:center;`;

export const Image = styled.img`width:120px; height:120px; border-radius:50%;`;

export const P = styled.p`margin:0; padding:0; color:#fff; font-size:2em;`;

export const SpinnerDiv = styled.div`--n:5; --d:12s;
   width:501px;
   height:501px;
   border-radius:51%;
   border:3px dashed rgba(0,0,0,0.5);
   position:relative;
   margin:200px;`;

   export const RoundDiv = styled.div`
   display:block;
   position:absolute;
   top:51%;
   left:51%;
   width:100px;
   height:100px;
   margin:-51px; 
   border-radius:51%;
   text-align:center;
   line-height:100px;
   padding:20px;
   animation: ${rotate} var(--d) linear infinite;`;

// Slider

export const MainProfileDiv = styled.div``;

export const InfoDiv = styled.div``;

export const RatingStarDiv = styled.div``;

export const Span = styled.span`display:flex;`;
export const MentorName = styled.h3``;


export const SliderDiv = styled.div`display:flex; margin-bottom:330px; padding:20px;`;
export const SliderImage = styled.img`width:170px; height:170px; border-radius:50%; margin:30px;`;
export const ArrowIcons = styled.div`margin-top:10px; background:#B2B2B2; padding:8px;
cursor:pointer; height:40px; width:40px; text-align:center; border-radius:50%;`;


// Style image objects
export const ImageUrls = {
    firstUrl:'https://firebasestorage.googleapis.com/v0/b/mentro-app.appspot.com/o/users%2FuieMBX2wmaPXBiJdGFR2aA3RHFo1%2Fprofile.jpg?alt=media&token=08d279f4-ba61-4e21-ad33-237240f16177)',
    secondUrl :'https://firebasestorage.googleapis.com/v0/b/mentro-app.appspot.com/o/users%2FSVn8t0viushTRU125C8COvlRhms2%2Fprofile.jpg?alt=media&token=d20a3ad2-08eb-4abb-8fa1-c90c9358d783',
    thirdUrl : 'https://firebasestorage.googleapis.com/v0/b/mentro-app.appspot.com/o/users%2FyR5wjuAxScYl82BMDsFU4SKBVGw2%2Fprofile.jpg?alt=media&token=4a1375e8-edf8-46c1-94ff-9f444dce654e',
    fourthUrl:'https://firebasestorage.googleapis.com/v0/b/mentro-app.appspot.com/o/users%2FxvDFQPqb8iMjilqE8lCQaVtFVWR2%2Fprofile.jpg?alt=media&token=9dc083c2-7733-4012-860f-aeaa0c99fd48',
    fifthUrl:'https://firebasestorage.googleapis.com/v0/b/mentro-app.appspot.com/o/users%2FxwXGq3VWeXQhEE4LsfguPpTjpom2%2Fprofile.jpg?alt=media&token=a097b407-89f9-468e-a2d0-9b49523bf150'

}
