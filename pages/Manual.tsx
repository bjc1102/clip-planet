import React from 'react'
import axios from 'axios'
import { Octokit } from '@octokit/core'

import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

const Manual: NextPage = ({
  text,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <article className="prose lg:prose-xl"></article>
}

export default Manual

export const getStaticProps: GetStaticProps = async () => {
  // const response = await axios({
  //   url: 'https://api.github.com/repos/zafar-saleem/anymnd/git/blobs/7af90ceab018a889b46634331cab822d94ff2b19',
  // })
  // console.log('response: ', response.data)
  const token = process.env.ACCESS_TOKEN
  const octokit = new Octokit({
    auth: token,
  })
  const result = await octokit.request(
    'GET /repos/{owner}/{repo}/contents/{path}',
    {
      owner: 'bjc1102',
      repo: 'startup-page',
      path: 'README.md',
    }
  )
  // const decodeData = atob(result.data)
  //@ts-ignore
  console.log(result.data.content)
  const text = '123'
  return {
    props: {
      text,
    },
  }
}
