import React, {useEffect, useState} from 'react';
import {
  AppBar, Toolbar, Grid,
  Typography, Button
} from "@mui/material";
import {Link, useNavigate} from 'react-router-dom';
import './Header.css';

import {isLogin, getCurrentLoginUser} from "../../util/login-util";

const Header = () => {

  const redirection = useNavigate();

  const logoutHandler = e => {
    localStorage.clear();
    redirection('/login');
  };

  return (
    <AppBar position="fixed" style={{
      background: '#38d9a9',
      width: '100%'
    }}>
      <Toolbar>
        <Grid justify="space-between" container>
          <Grid item flex={9}>
            <div style={
              {
                display: 'flex',
                alignItems: 'center'
              }
            }>
              <Typography variant="h4">
                <Link to='/'>
                  {
                    isLogin()
                      ? getCurrentLoginUser().username + '님'
                      : '오늘'
                  }
                  의 할일
                </Link>
              </Typography>
            </div>
          </Grid>

          <Grid item>
            <div className='btn-group'>
              {
                isLogin()
                  ?
                  (
                    <button
                      className='logout-btn'
                      onClick={logoutHandler}>로그아웃</button>
                  )
                  :
                  (
                    <>
                      <Link to='/login'>로그인</Link>
                      <Link to='/join'>회원가입</Link>
                    </>
                  )
              }
            </div>
          </Grid>

        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;