import { HiddenImage } from '@/components'
import React, { ReactElement } from 'react'
import Alisa from '@images/Alisa.svg'
import Ukraine from '@images/Ukraine.svg'
import styled from 'styled-components'

const StyledDiv = styled.div`
    background: radial-gradient(ellipse at left bottom, #A5DEE5 0%, #FFF0E2 16%, #FFEFB9 40%, transparent 80%),
                radial-gradient(ellipse at center top, #FFF0E2 0%, #A5DEE5 35%, #FFF0E2 62.5%, #DCEDC2 100%);
`

export default function Main(): ReactElement {
  return (
    <StyledDiv className='h-screen flex flex-col justify-center items-center bg-gradient-to-br'>
      <h2 className='w-3/4 lg:w-1/2 text-center leading-normal'>
        My name is <HiddenImage image={Alisa} text='Alisa Vynohradova' /> —
        a <HiddenImage image={Ukraine} text='Ukrainian' /> software developer based in Ontario, Canada —
        blending technical expertise in <span className='font-header text-2xl font-bold'>full-stack development</span> with
        a creative flair ✨. I thrive on collaboration, innovation, and attention to detail. Contact me if you want to
        talk <span className='font-header text-2xl font-bold'>code</span> or <span className='font-header text-2xl font-bold'>mixology</span> :)
      </h2>
      {/*<Surprise />*/}
    </StyledDiv>
  )
}
