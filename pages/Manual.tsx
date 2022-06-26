import React from 'react'
import { Octokit } from '@octokit/core'

import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

const Manual: NextPage = ({
  markdown,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="mx-auto max-w-full">
      <article className="prose lg:prose-xl">{markdown}</article>
    </div>
  )
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
  //@ts-ignore
  const decodeData = Buffer.from(result.data.content, 'base64')
  const markdown = decodeData.toString()
  console.log(markdown)
  return {
    props: {
      markdown,
    },
  }
}
