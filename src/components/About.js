import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const { userName } = useContext(UserContext);
  const userName1 = localStorage.setItem("name", "Sagar");
  const getName = localStorage.getItem("name");
  return (
    <div className="flex justify-center items-center m-10 p-7 bg-green-100 rounded-lg">
      <h2 className="font-bold">UserName: {userName}</h2>
      <h3>{getName}</h3>
    </div>
  );
};

export default About;
