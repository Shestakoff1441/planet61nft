
import React from 'react'
import { useEffect, useState } from 'react'
import MainLayout from '../src/client/components/MainLayout'
// const MainLayout = React.lazy(() =>
//   import('../src/client/components/MainLayout'),
// )
import { createClient } from '../prismicio'

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getByUID('header', 'head')
  console.log(JSON.stringify(page))
  return {
    props: {
      data: JSON.stringify(page, null, 2),
    },
  }
}
function Home(props) {
  console.log(JSON.parse(props.data))
  return (
    <>
      <MainLayout />
    </>
  )
}

export default Home
