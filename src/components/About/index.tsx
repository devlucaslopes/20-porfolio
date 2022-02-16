import React from 'react'

import { Picture } from '../Picture'
import { Wrapper } from './styles'

export const About = () => (
  <Wrapper>
    <Picture
      url="https://images.unsplash.com/photo-1624377632657-3902bfd35958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=100"
      alternativeText="foto de perfil de um programador"
    />
    <div>sobre mim</div>
  </Wrapper>
)
