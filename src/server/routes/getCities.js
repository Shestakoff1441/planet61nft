// import Prismic from 'prismic-javascript'
// import { PRISMIC_API_URL } from '../config'
// const express = require('express')
// const request = require('request')
// const router = express.Router()

export const getBlogPostsAPI = async () => {
  try {
    const API = await Prismic.api('https://prismic-app-first.prismic.io/api/v2')
    console.log('api')
    const response = await API.query(Prismic.Predicates.at('data', 'rarity'), {
        orderings: '*',
    })
    return response
  } catch (error) {
    return error
  }
}


// const getArtistId = router.get('/get-artistId', (req, res) => {
//   const checkArtistId = `https://api.eightydays.me/api/v3/cities`
//   console.log('insiddde')
//   request.get(checkArtistId, (err, response, body) => {
//     console.log(body)
//     if (err) {
//       console.log(error)
//       return response.status(400).send(err)
//     }
//     console.log('dsfds  ', body)
//     res.send(body)
//   })
// })

// module.exports = {
//   getArtistId: getBlogPostsAPI,
// }
