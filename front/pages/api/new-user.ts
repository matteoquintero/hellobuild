import axios from 'axios';

export default function handler(req:any, res:any) {
    const body = req.body
    axios.post('http://localhost:3300/api/users', body).then(response => {
      if(response.status){
        res.status(200).json(true)
      }else{
        res.status(206).json(false)
      }
    })    
}
  