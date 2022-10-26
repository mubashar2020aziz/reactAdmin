import React from 'react';
import './New.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
const New = () => {
  return (
    <>
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1>Add New Users</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img src="/assets/avatar.jpg" alt="" />
            </div>
            <div className="right">
              <form>
                <div className="formInput">
                  <label htmlFor="file">
                    Image:
                    <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    placeholder="john_Dow"
                    id="file"
                    style={{ display: 'none' }}
                  />
                </div>

                <div className="formInput">
                  <label>UserName</label>
                  <input type="text" placeholder="john Dow" />
                </div>

                <div className="formInput">
                  <label>Name&Surname</label>
                  <input type="text" placeholder="john Dow" />
                </div>

                <div className="formInput">
                  <label>Email</label>
                  <input type="email" placeholder="john_Dow@gmail.com" />
                </div>

                <div className="formInput">
                  <label>Phone</label>
                  <input type="text" placeholder="+1 235 4569" />
                </div>

                <div className="formInput">
                  <label>password</label>
                  <input type="password" />
                </div>

                <div className="formInput">
                  <label>Address</label>
                  <input type="text" placeholder="Elton street2 New York" />
                </div>

                <div className="formInput">
                  <label>Country</label>
                  <input type="text" placeholder="USA" />
                </div>
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
