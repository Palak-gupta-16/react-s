"use client"
import Header from '@/Components/Header'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const page = () => {
  const [img,setimg] = useState([])
  const [marks,setMarks] = useState(99)
  const handleFunc = () =>{
    setMarks(66)
  }
  useEffect(()=>{
    getImages()
  })

  const getImages = async()=>{
    try {
      const res = await axios.get("https://picsum.photos/v2/list")
      const data = res.data;
      setimg(data)
      console.log(res.data)
    } catch (error) {
      console.error("error")
    }
  }
  return (
    <>
    <Header/>
    <h1 className ='font-bold text-xl text-red-300'>helooooo {marks} </h1>
    <button onClick= {handleFunc} className='bg-gray-100 px-5 py-2 rounded mt-3 '>click me</button>
    <Link className='bg-gray-100 px-5 py-2 rounded mt-3 ml-3 ' href='/About'>about</Link>
    <Link className='bg-gray-100 px-5 py-2 rounded mt-3 ml-3' href='/Product'>product</Link>

    <button onClick= {getImages} className='bg-gray-100 px-5 py-2 rounded mt-3 '>Get Images</button>
<ul>
  {img.map((elem,i)=>{
    return <img key={i} src= {elem.download_url}/>
  })}
</ul>
    
    </>
  )
}

export default page
