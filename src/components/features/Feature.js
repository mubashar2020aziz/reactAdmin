import React from 'react';
import './feature.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
const Feature = () => {
  return (
    <>
      <div className="featured">
        <div className="top">
          <h1 className="title">Total Revenue</h1>
          <MoreVertOutlinedIcon font-size="small" />
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar value="70" text="70%" strokeWidth={5} />
          </div>
          <p className="title">Total sales made today</p>
          <p className="amount">$420</p>
          <p className="desc">
            Previous transaction processing,Last Payment may not be included
          </p>
          <div className="summery">
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult  negative">
                <KeyboardArrowDownOutlinedIcon fontSize="small" />
              </div>
              <div className="resultAmount">$12.41</div>
            </div>

            <div className="item">
              <div className="itemTitle">Last Weak</div>
              <div className="itemResult positive">
                <KeyboardArrowUpOutlinedIcon fontSize="small" />
              </div>
              <div className="resultAmount">$12.41</div>
            </div>

            <div className="item">
              <div className="itemTitle">Last Month</div>
              <div className="itemResult positive">
                <KeyboardArrowUpOutlinedIcon fontSize="small" />
              </div>
              <div className="resultAmount">$12.41</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
