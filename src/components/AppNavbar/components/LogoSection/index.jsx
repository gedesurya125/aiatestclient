import React from 'react'
import {styled} from '@mui/material/styles';
import logo from '../../../../assets/images/logoWhite.svg'

const LogoSectionContainer = styled('div')(
  ({theme}) => ({
    width: '200px',
    '& img':{
      width: '100%'
    },
    display: 'flex',
    alignItems: 'center'
  })
)


const LogoSection = () => {
  return (
    <LogoSectionContainer>
      <img src={logo} alt="..."/>
    </LogoSectionContainer>
  )
}

export default LogoSection
