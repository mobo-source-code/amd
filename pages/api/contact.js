import axios from "axios";

export default async (req, res) => {

  const {nom, tel, email} = req.body
  const body = {
    nom, 
    tel, 
    email, 
  }
  console.log("sent")
  try {
    const data = await axios.post('https://amd-backend.herokuapp.com/send/', body)
    .then(res => {return res.data})
    console.log(data)
    res.status(200).json({sent: data})
  } catch(error) {
    if (error.response) {
      console.error(error.response.data)
      console.error(error.response.status)
      console.error(error.response.headers)
      return res.status(401).json({message: error.response.data.detail})
    } else if (error.request) {
      console.error(error.request)
    } else {
      console.error('Error', error.message)
    }
    return res.status(500).json({message: "Something went wrong"})
  }
}