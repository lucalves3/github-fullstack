const axios = require('axios');
require('dotenv').config();

const apiUsers = async (req, res) => {
  let { since } = req.query

  try {
    const { data, headers } = await axios.get(`https://api.github.com/users?since=${since}`, {
       headers: {
        'Authorization': 'token ' + process.env.USER_TOKEN
      }
    });

    FirstIdUser = data[0].id;
    let nextPage = headers.link;
    nextPage = nextPage.split(',');
    since = nextPage[0].replace(/[^0-9]/g,'');
    let objectResult = [
      {
        firstIdUser: FirstIdUser,
        next_page: since,
        data,
      }
    ]
    console.log(nextPage)
    return res.status(200).json(objectResult);
  } catch (error) {
    console.log(error.message)
    return res.status(404).json({ message: 'Sorry something wrong!' })
  }
}

module.exports = apiUsers;