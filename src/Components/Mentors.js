import React,{useState} from 'react'

import {BsChevronLeft, BsChevronRight, BsFillStarFill} from 'react-icons/bs'
import { ImageUrls } from './StyledCmp'
import { MentorData } from './Data'
import { MainDiv, MentorsDiv, CircleDiv, SpinnerDiv, RoundDiv, GreenDiv, Image} from './StyledCmp'
import {MainProfileDiv, ProfileImag, InfoDiv, RatingStarDiv, Span, SliderDiv, SliderImage, ArrowIcons } from './StyledCmp'

function Mentors() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const MoveToPreviousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    let newIndex = isFirstSlide ? MentorData.length-1 : currentIndex-1;
    setCurrentIndex(newIndex);
  }

  const MoveToNextSlide = () => {
    const isLastSlide = currentIndex === MentorData.length-1;
    let newIndex = isLastSlide ? 0 : currentIndex+1;
    setCurrentIndex(newIndex);
  }

  return (
    <MainDiv>
        <MentorsDiv>
        <SliderDiv>
              <ArrowIcons onClick={MoveToPreviousSlide}><BsChevronLeft style={{width:'25px', height:'20px', marginTop:'9px'}}/></ArrowIcons>
              <SliderImage src={MentorData[currentIndex].image}/>
              <ArrowIcons onClick={MoveToNextSlide}><BsChevronRight style={{width:'25px', height:'20px', marginTop:'9px'}}/></ArrowIcons>
            </SliderDiv>
            <MainProfileDiv>
              <RatingStarDiv>
                <Span>{MentorData[currentIndex].rating}</Span>
                <Span><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></Span>
              </RatingStarDiv>
            </MainProfileDiv>
            <CircleDiv>
              <GreenDiv>
                    <SpinnerDiv>
                    <><RoundDiv  style={{ transform: 'translate(251px)'}}><Image src={ImageUrls.firstUrl}/></RoundDiv>
                    <RoundDiv style={{ transform: 'rotate(58deg) translate(251px) rotate(-58deg)' }}><Image src={ImageUrls.secondUrl}/></RoundDiv>
                    <RoundDiv style={{ transform: 'rotate(125deg) translate(251px) rotate(-125deg)'}}><Image src={ImageUrls.thirdUrl}/></RoundDiv>
                    <RoundDiv style={{ transform: 'rotate(182deg) translate(251px) rotate(-182deg)'}}><Image src={ImageUrls.fourthUrl}/></RoundDiv>
                    <RoundDiv style={{ transform: 'rotate(270deg) translate(251px) rotate(-270deg)'}}><Image src={ImageUrls.fifthUrl}/></RoundDiv></>
                    </SpinnerDiv>
              </GreenDiv>
            </CircleDiv>
        </MentorsDiv>
    </MainDiv>
  )
}

export default Mentors;

