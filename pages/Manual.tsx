import React from 'react'
import axios from 'axios'

import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

const Manual: NextPage = ({
  text,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <article className="prose lg:prose-xl"></article>
}

export default Manual

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios({
    url: 'https://api.github.com/repos/zafar-saleem/anymnd/git/blobs/7af90ceab018a889b46634331cab822d94ff2b19',
  })
  console.log('response: ', response.data)
  const text = await response.data.content
  return {
    props: {
      text,
    },
  }
}
