import React from 'react'

export const wrapRootElement = ({ element }) => {
  console.log('gatsby-browser.tsx works! 💯')

  return (
    <>
      {element}

      <strong>I'm a local-plugin! 💯</strong>
    </>
  )
}
