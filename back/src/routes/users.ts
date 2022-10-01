import express from 'express'
import * as userServices from '../services/userServices'

const router = express.Router()

router.get('/', (_req:any, res:any) => {
  res.send(userServices.getUsersNoPass())
})

router.get('/:email', (req:any, res:any) => {
  const diary = userServices.findByEmail(req.params.email)

  return (diary != null)
    ? res.status(200).json({data:diary})
    : res.status(404).json({data:null})
})

router.post('/', (req:any, res:any) => {
  try {
    let newUser = req.body
    //En esta parte faltan muchas validaciones
    const addedUser = userServices.addUser(newUser)

    res.status(201).json(addedUser)
  } catch (e:any) {
    res.status(400).send(e.message)
  }
})

export default router
