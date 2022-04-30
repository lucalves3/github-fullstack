const axios = require('axios');
require('dotenv').config();

const ApiUsersFindByName = async (req, res) => {
  let { username } = req.params

  try {
    const { data } = await axios.get(`https://api.github.com/users/${username}`, {
       headers: {
        'Authorization': 'token ' + process.env.USER_TOKEN
      }
    });

    let objectResult ={ 
        models: {
          data,
      }}

    return res.status(200).json(objectResult);
  } catch (error) {
    console.log(error.message)
    return res.status(404).json({ message: 'Sorry something wrong!' })
  }
}

module.exports = ApiUsersFindByName;