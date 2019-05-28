import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 2rem 0;
`

export const Flex = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const CardScene = styled.div`
  width: 100%;
  max-width: 30%;

  @media (max-width: 960px) {
    max-width: 100%;
  }
`
