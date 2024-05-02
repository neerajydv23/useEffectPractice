import React, { useEffect, useState } from "react";
import axios from "./helpers/axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get("/users");
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4">Homepage</h1>
      <div className="flex flex-wrap gap-6 ">
        {users.map((user) => (
          <div key={user.id} className=" rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
