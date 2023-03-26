import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { GlobalStyle } from "../../components/theme/globalStyle"
import Header from "../../components/header"
import Main from "../../components/main"


const Container = styled.div`
  margin: 0;
  padding: 0;
`;
const Wrapper = styled.figure`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 789px) {
    flex-flow: row wrap;
  }
`;

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    
    <Container>
        <GlobalStyle/>
        <Header />
        <Main>
      <Wrapper>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Wrapper>
      </Main>
    </Container>
    
    
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`