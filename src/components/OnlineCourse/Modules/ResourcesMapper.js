import React from 'react'
import Resource from './Resource'
import styled from 'styled-components'


const Container = styled.div`
    display:block;
    text-align:center;
    padding-top:10px

`

const ResourcesMapper = (props) => {
    return (
        <Container>
            {
                props.module_resources.map((resource) => 
                <Resource resource={resource}/>
                )
            }
        </Container>
    )
}

export default ResourcesMapper