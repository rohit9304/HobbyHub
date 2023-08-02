
import {React,useState} from 'react';

import MyHobbies from './MyHobbies';
import Add from './Add';
import Favorites from './Favorites';

const Navbar = () => {
  const [tab, setTab] = useState("");
  const addHobbies = () => {
    setTab("1");
  };
  const showHobbies = () => {
    setTab("2");
  };
  const fav = () => {
    setTab("3");
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary" data-bs-theme="dark-blue">
        <form className="container-fluid justify-content-start">
          <button className="btn btn-outline-success me-2" type="button" onClick={addHobbies}>Add Hobby</button>
          <button className="btn btn-outline-success me-2" type="button" onClick={showHobbies}>My Hobbies</button>
          <button className="btn btn-outline-success me-2" type="button" onClick={fav}>Favorites</button>
        </form>
      </nav>
      {tab === "1" ? <Add /> : ""}
      {tab === "2" ? <MyHobbies /> : ""}
      {tab === "3" ? <Favorites /> : ""}
    </>
  );
};

export default Navbar;
