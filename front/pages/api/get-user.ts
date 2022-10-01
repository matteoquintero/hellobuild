import axios from 'axios';

export default function handler(req:any, res:any) {
    const body = req.body
    axios.get(`http://localhost:3300/api/users/${body.email}`).then(response => {
      if(response.status && body.password == response.data.data.password){
        res.status(200).json(true)
        return
      }else{
        res.status(206).json(false)
      }
    })
}
  