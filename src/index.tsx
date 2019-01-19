import * as React from 'react'

interface IndexProps {
  title: string
}

const index: React.SFC<IndexProps> = ({title}) => {
  return <div>{title}</div>
}

export default index
