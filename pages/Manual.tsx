import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Octokit } from '@octokit/core'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

const Manual: NextPage = ({
  markdown,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="mx-auto max-w-full prose">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}

export default Manual

export const getStaticProps: GetStaticProps = async () => {
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
