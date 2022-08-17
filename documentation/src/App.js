import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import markdown from './README.md'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import './App.css'
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
} from "react-router-dom";


const App = () => {


  const [marked, setmarked] = useState('')

  const func = () => {
    fetch(markdown).then((response) => response.text()).then((text) => {
      setmarked(text)
    })
  }
  useEffect(() => {
    func()
  }, [])


  return (
    <Router>
      <section>
        
        <Navbar />

        <div className='container myContainer my-5'>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} children={marked}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }} />
        </div>
      </section>
    </Router>
  )
}

export default App

