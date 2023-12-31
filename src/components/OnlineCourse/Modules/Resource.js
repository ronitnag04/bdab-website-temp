import React from 'react'
import styled from 'styled-components'

const Icon = styled.img`
  width:100%;
  max-width:300px;
  :hover{
    filter:contrast(60%)
  }

`

const ResourcesTitle = styled.h1`
  font-size:20px;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 2px;
  font-weight: 500;
  color: white;
  margin-bottom:5px;

`

const ResourceContainer = styled.div`
`

const Resource = (props) => {
  return (
    <ResourceContainer>
      <ResourcesTitle>{props.resource['name']}</ResourcesTitle>
      <a href={props.resource['link']}>
          <Icon 
              src={ props.resource['icon'] } 
              alt={`${props.resource['icon']} Icon`}
          />
      </a>
    
    
    </ResourceContainer>
    
  )
}

export default Resource