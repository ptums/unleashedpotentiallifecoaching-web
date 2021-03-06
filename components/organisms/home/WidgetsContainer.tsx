import RowWidget from 'components/molecules/RowWidget'
import React from 'react'
import styled from 'styled-components'
import { BlockWidget } from 'types/Home'

interface Props {
  widgets: BlockWidget[]
}
const WidgetsContainer = ({ widgets }: Props) => {
  return (
    <Block>
      {widgets.map((widget) => (
        <RowWidget {...widget} key={widget.id} />
      ))}
    </Block>
  )
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin: 92px 0;
`

export default WidgetsContainer
