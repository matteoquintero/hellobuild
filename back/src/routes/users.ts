import express from 'express'
import * as userServices from '../services/userServices'

const router = express.Router()

router.get('/', (_req:any, res:any) => {
  res.send(userServices.getUsers())
})


router.get('/:email', (req:any, res:any) => {
  const user = userServices.findByEmail(req.params.email)

  return (user != null)
    ? res.status(200).json({data:user, status:true})
    : res.status(404).json({data:null, status:false})
})

router.post('/', (req:any, res:any) => {
  try {
    let newUser = req.body
    //En esta parte faltan muchas validaciones
    const addedUser = userServices.addUser(newUser)

    res.status(201).json({data:addedUser, status:true})
  } catch (e:any) {
    res.status(400).json({data:e.message, status:false})
  }
})

export default router
