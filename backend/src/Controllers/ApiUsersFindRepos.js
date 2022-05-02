const axios = require('axios');
require('dotenv').config();

const apiUsersFindRepos = async (req, res) => {
  let { username } = req.params

  try {
    const { data } = await axios.get(`https://api.github.com/users/${username}/repos`, {
       headers: {
        'Authorization': 'token ' + process.env.USER_TOKEN
      }
    });

    Quantity = data.length;

    let objectResult ={ 
        model: {
          quantity: Quantity,
          data,
      }}

    return res.status(200).json(objectResult);
  } catch (error) {
    console.log(error.message)
    return res.status(404).json({ message: 'Sorry something wrong!' })
  }
}

module.exports = apiUsersFindRepos;