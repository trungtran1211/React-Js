import { useState, React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import { Link, NavLink } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Register from '../../features/Auth/Components/Register';
import {  Box, IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle, Close } from '@material-ui/icons';
import Login from '../../features/Auth/Components/Login';
import {  logout } from '../../features/Auth/userSlice';
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  },
  closeButton:{
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  },
}));

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register'
};
export default function Header() {
    const dispatch = useDispatch();

    const loggedInUser = useSelector(state => state.user.current);
    const isLoggedIn = !!loggedInUser.id;
    const [open, setOpen] = useState(false);
    //set page login register
    const [mode, setMode] = useState(MODE.LOGIN);
    //hiện menu user
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClickUser = (e) => {
      setAnchorEl(e.currentTarget);
    };
    const handleCloseUser = () => {
      setAnchorEl(null);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    //đăng xuất user
    const handleLogoutClick = () =>{
      const action = logout();
      dispatch(action);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* appbar là thanh header */}
      <AppBar position="static">
        <Toolbar>
        <DeveloperModeIcon className={classes.menuButton}/>
          <Typography variant="h6" className={classes.title}>
                <Link className={classes.link} to="/">EZ SHOP</Link>
          </Typography>
            <NavLink className={classes.link} to="/todos">
                <Button color="inherit">Todos</Button>
            </NavLink>
            <NavLink className={classes.link} to="/album">
                <Button color="inherit">Album</Button>
            </NavLink>

            {!isLoggedIn && (
                <Button onClick={handleClickOpen} color="inherit">Login</Button>
            )}
            {isLoggedIn && (
              <IconButton color="inherit" onClick={handleClickUser}>
                <AccountCircle/>
              </IconButton>
            )}  
        </Toolbar>
      </AppBar>
      {/* Hiện thanh menu đăng nhập */}
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseUser}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        getContentAnchorEl={null}
      >
        {/* end menu */}
        <MenuItem onClick={handleCloseUser}>My account</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
      {/* Dialog này là hiện form register */}
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <IconButton onClick={handleClose} className={classes.closeButton}>
          <Close/>
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose}/>
              <Box textAlign="center">
                <Button color="primary" onClick={()=> setMode(MODE.LOGIN)}>
                    Bạn đã có tài khoản, đăng nhập ở đây.
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose}/>
              <Box textAlign="center">
                <Button color="primary" onClick={()=> setMode(MODE.REGISTER)}>
                    Bạn chưa có tài khoản, đăng ký tại đây.
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
