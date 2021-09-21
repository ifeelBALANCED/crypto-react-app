import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const menu = [
    { menuIcon: <HomeOutlined />, to: '/', title: 'Home' },
    { menuIcon: <FundOutlined />, to: '/cryptocurrencies', title: 'Cryptocurrencies' },
    { menuIcon: <MoneyCollectOutlined />, to: '/exchanges', title: 'Exchanges' },
    { menuIcon: <BulbOutlined />, to: '/news', title: 'News' },
  ];
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
      setActiveMenu(screenSize <= 800);
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo"><Link to="/">Cryptoverse</Link></Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>
      {!activeMenu && (
      <Menu theme="dark">
        { menu.map(({ to, menuIcon, title }) => (
          <Menu.Item icon={menuIcon} key={title}>
            <Link to={to}>{ title }</Link>
          </Menu.Item>
        ))}
      </Menu>
      )}
    </div>
  );
};

export default Navbar;
