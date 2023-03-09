import React from 'react'
import { MainDiv, MentorsDiv, CircleDiv, ContentDiv, SpinnerDiv, RoundDiv} from './StyledCmp'

function Mentors() {
  return (
    <MainDiv>
        <MentorsDiv>
            <CircleDiv>
                <SpinnerDiv>
                    <RoundDiv>1</RoundDiv>
                    <RoundDiv>2</RoundDiv>
                    <RoundDiv>3</RoundDiv>
                    <RoundDiv>4</RoundDiv>
                    <RoundDiv>5</RoundDiv>
                </SpinnerDiv>
            </CircleDiv>
        </MentorsDiv>
    </MainDiv>
  )
}

export default Mentors