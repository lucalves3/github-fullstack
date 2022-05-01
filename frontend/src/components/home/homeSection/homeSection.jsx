import { useEffect, useState } from "react";
import api from "../../../services/api";
import HomeCards from "../homeCards/homeCards";
import HomeSectionSTL from "./homeSectionSTL.styled";

const HomeSection = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    async function getApi() {
      try {
        const {data} = await api.get('/api/users');
        if (data) {
          setUsersData(data);
        }
      } catch (error) { 
        console.log(error.message)
      }
    };
    getApi()
  }, []);

  console.log(usersData)

  return (
    <HomeSectionSTL>
      { usersData && usersData?.models?.data.map((user) => (
        <HomeCards
        id={user.id}
        image={user.avatar_url}
        login={user.login}
        />
      )) }
    </HomeSectionSTL>
  );
};

export default HomeSection;