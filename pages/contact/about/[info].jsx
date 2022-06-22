import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

const About = (props) => {
    console.log(props)
  const [data,setData] = useState([])
    useEffect(() =>{
        const getCities = async() =>{
            const request = await fetch('https://api.eightydays.me/api/v3/cities');
            const reponse= await request.json();
            console.log(reponse)
            setData(reponse.data.values)
        }
        getCities();
    },[])

  return <div>A{
    data?.map((el,i) =><div key={`el.name${i}`}>{el.name}</div>)
      }</div>
}



export default About
