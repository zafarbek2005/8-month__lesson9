import React from 'react';
import './admin.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from '../redux/UserApi';

const Admin = () => {
  const navigate = useNavigate(); 
  const { data, isLoading, isError, error, isSuccess } = useGetUsersQuery(); 

  const handleLogout = () => {
    localStorage.clear();
    navigate("/"); 
  };

  return (
    <>
      <div className="admin__nav">
        <Link to="/" className="admina">Home</Link>
        <Link to="/Contact" className="admina">Contact Us</Link>
      </div>
      <div className="admin__container">
        <h3 className="admin__h3">Admin panel</h3>
        <div className="admin__text">
          <p className="admin__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
          </p>
        </div>
        
        <h4 className="admin__h4">User List</h4>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {error.message}</p>}
        {isSuccess && (
          <ul className="admin__user-list">
            {data?.data?.users?.map(user => (
              <li key={user.id} className="admin__user-item">
                <div className="admin__user-info">
                  <p className="admin__user-name">{user.FirstName}</p>
                  <p className="admin__user-email">{user.LastName}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        <button className="admin__button" onClick={handleLogout}>Log out</button>
      </div>
    </>
  );
};

export default Admin;
