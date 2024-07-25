import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { userProfile } from "../../api/user";

interface User {
  userName: string;
  email: string;
  age: number;
  role: string;
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const storedUser = localStorage.getItem("loggedUser");

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        const user = await userProfile();
        if (user) {
          setUser(user);
        }
      }
    };

    fetchUserProfile();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container">
      <div className="user-profile">
        <h1>User Profile</h1>
        <div className="profile-detail">
          <label>Name:</label>
          <p>{user.userName}</p>
        </div>
        <div className="profile-detail">
          <label>Email:</label>
          <p>{user.email}</p>
        </div>
        <div className="profile-detail">
          <label>Age:</label>
          <p>{user.age}</p>
        </div>
        <div className="profile-detail">
          <label>Role:</label>
          <p>{user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
