import React from 'react'
import{HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn

} from './HerosectionElements'
const HeroSection = () => {
    return (
        <>
        <HeroContainer>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Read your favorite book online</HeroH1>
                    <HeroP>Enjoy music while reading🎵</HeroP>
                    <HeroBtn>Go to library</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
            
        </>
    )
}

export default HeroSection
