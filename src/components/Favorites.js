import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../store/reducers/hobbyReducer';

const Favorites = () => {
  const { favorites } = useSelector((state) => state.hobbies);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="mb-4">Favorites</h1>
      <ul className="list-group">
        {favorites.map((hobby, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {hobby}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => dispatch(removeFromFavorites(hobby))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
