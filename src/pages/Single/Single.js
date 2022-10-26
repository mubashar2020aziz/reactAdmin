import React from 'react';
import './Single.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from '../../components/chart/Chart';
import Table1 from '../../components/table/Table';

const Single = ({ aspect }) => {
  return (
    <>
      <div className="single">
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
          <div className="top">
            <div className="left">
              <div className="editbutton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img src="/assets/manface1.jpg" alt="" className="itemImage" />
                <div className="details">
                  <h2 className="itemTitle">Jane Dower</h2>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemKey">jow@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">PhoneNo:</span>
                    <span className="itemKey">+1 231 222 444</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemKey">Eleton Road.New York</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemKey">Pakistan</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <Chart aspect={4 / 1} title="Users Spending (last 6 Months)" />
            </div>
          </div>
          <div className="bottom">
            <h1 className="title1">Last Transaction</h1>
            <Table1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
