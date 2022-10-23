import React from 'react';
import './Widget.scss';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const Widget = ({ type }) => {
  let data;

  //temporaty
  const amount = 100;
  const detail = 20;

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'see all users',
        icon: (
          <PersonOutlineIcon
            className="icon"
            style={{ color: 'crimson', background: 'rgba(255,0,0,0.2)' }}
          />
        ),
      };
      break;
    case 'order':
      data = {
        title: 'Orders',
        isMoney: true,
        link: 'views all orders',
        icon: (
          <ProductionQuantityLimitsOutlinedIcon
            className="icon"
            style={{ color: 'goldenrod', background: 'rgba(218,165,32,0.2)' }}
          />
        ),
      };
      break;
    case 'earning':
      data = {
        title: 'Earning',
        isMoney: true,
        link: 'views net earning ',
        icon: (
          <Person2OutlinedIcon
            className="icon"
            style={{ color: 'green', background: 'rgba(0,128,0,0.2)' }}
          />
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'see details',
        icon: (
          <AccountCircleOutlinedIcon
            className="icon"
            style={{ color: 'blue', background: 'rgba(0,0,150,0.2)' }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <>
      <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">
            {data.isMoney && '$'} {amount}
          </span>
          <span className="link">{data.link}</span>
        </div>

        <div className="right">
          <div className="percentage positive">
            <ArrowDropUpIcon />
            {detail} %
          </div>
          {data.icon}
        </div>
      </div>
    </>
  );
};

export default Widget;
