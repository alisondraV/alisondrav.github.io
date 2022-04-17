import { HiddenImage, Surprise } from '@/components'
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
      <h2 className='w-3/4 md:w-1/2 text-center leading-normal'>
        Hi there! My name is <HiddenImage image={Alisa} text='Alisa Vynohradova' />,
        I live and work in Canada, but was born in <HiddenImage image={Ukraine} text='Ukraine' /> I
        have a lot of energy and positivity that I am willing to share with people.
      </h2>
      <Surprise />
    </StyledDiv>
  )
}
