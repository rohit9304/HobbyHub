import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, deleteHobby, } from '../store/reducers/hobbyReducer';

const MyHobbies = () => {
  const { hobbies } = useSelector((state) => state.hobbies);
  const dispatch = useDispatch();

  const handleAddToFav = (hobby) => {
    dispatch(addToFavorites(hobby));
  };

  return (
    <>
      <h1 className="mb-4">My Hobbies</h1>
      <ul className="list-group">
        {hobbies.map((hobby, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {hobby}
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => handleAddToFav(hobby)}
            >
              Add To Fav
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => dispatch(deleteHobby(hobby))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MyHobbies;
