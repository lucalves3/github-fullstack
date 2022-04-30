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
    LastIdUser = data[29].id;
    let nextPage = headers.link;
    nextPage = nextPage.split(',')
    let linkFinal = nextPage[0].replace('>; rel=\"next\"','').replace('<', '');
    since = LastIdUser;

    let objectResult ={ 
        models: {
          firstIdUser: FirstIdUser,
          lastIdUser: LastIdUser,
          next_page: since,
          next_page_link: linkFinal,
          data,
      }}

    return res.status(200).json(objectResult);
  } catch (error) {
    console.log(error.message)
    return res.status(404).json({ message: 'Sorry something wrong!' })
  }
}

module.exports = apiUsers;