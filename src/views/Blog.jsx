import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Content from '../elements/Content'
import { Divider } from '../elements/Dividers'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`

const Blog = ({ children, offset }) => (
  <>
    <Content speed={0.1} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default Blog

Blog.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
