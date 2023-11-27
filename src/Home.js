import { useState } from "react";

const Home = () => {
  // let name = "Ahdian";
  const [name, setName] = useState("ahdian");
  const [age, setAge] = useState(22);

  const handleClick = () => {
    setName("mirza");
    setAge(30);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Home;