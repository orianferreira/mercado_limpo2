import React from "react";
import { alpha, AppBar, Box, TextField, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/token/tokenReducer";
import { addToken } from "../../../store/token/actions";
import { toast } from 'react-toastify';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import TimelineIcon from '@mui/icons-material/Timeline';


function Navbar() {

    let history = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined
        });
        history('/login')
    }
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!Aqui comeca a segunda navbar!!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            grow: {
                flexGrow: 1,
            },
            menuButton: {
                marginRight: theme.spacing(2),
            },
            title: {
                display: 'none',
                [theme.breakpoints.up('sm')]: {
                    display: 'block',
                },
            },
            search: {
                position: 'relative',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: alpha(theme.palette.common.white, 0.15),
                '&:hover': {
                    backgroundColor: alpha(theme.palette.common.white, 0.25),
                },
                marginRight: theme.spacing(2),
                marginLeft: 0,
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                    marginLeft: theme.spacing(3),
                    width: 'auto',
                },
            },
            
            inputRoot: {
                color: 'inherit',
            },
            inputInput: {
                padding: theme.spacing(1, 1, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
                transition: theme.transitions.create('width'),
                width: '450px',
                [theme.breakpoints.up('md')]: {
                    width: '70ch',
                },
            },
            sectionDesktop: {
                display: 'none',
                [theme.breakpoints.up('md')]: {
                    display: 'flex',

                },
            },
            sectionMobile: {
                display: 'flex',
                [theme.breakpoints.up('md')]: {
                    display: 'none',
                },
            },
        }),
    );

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}> <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <TimelineIcon />
                    </Badge>
                </IconButton>Analytics</MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={5} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>Mensagens</MenuItem>
                
               
            <MenuItem onClick={handleMenuClose}>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>Notificações</MenuItem>
            <MenuItem onClick={handleMenuClose}><IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <AddBusinessIcon />
                    </Badge>
                </IconButton>Loja</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            
                
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                    <FavoriteIcon />
                    </Badge>
                </IconButton>
                <p>Favoritos</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                    < ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <p>Carrinho</p>
            </MenuItem>
            
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!Aqui termina a segunda navbar!!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    var navComponent1;
    var navComponent2;

    if (token != '') {


        navComponent1 = <AppBar position="static">
            <Toolbar className='nav-main' >


                <Grid xs={4}>

                </Grid>

                <Grid xs={5} className="container">
                    <Box className="nav-link">
                        <Link to='/home' className="link">
                            <Typography variant="h6" color="inherit" className="typography">
                                home
                            </Typography>
                        </Link>

                        <Link to='/produtos' className="link">
                            <Typography variant="h6" color="inherit" className="typography">
                                produtos
                            </Typography>
                        </Link>

                        <Link to='/categoria' className="link">
                            <Typography variant="h6" color="inherit" className="typography">
                                categorias
                            </Typography>
                        </Link>

                        <Link to='/sobre' className="link">
                            <Typography color="inherit" className="typography">
                                sobre nós
                            </Typography>
                        </Link>

                        <Link to='/contato' className="link">
                            <Typography color="inherit" className="typography">
                                contato
                            </Typography>
                        </Link>

                        <Link to='/login' className="link">
                            <Typography color="inherit" className="typography" onClick={goLogout}>
                                logout
                            </Typography>
                        </Link>
                    </Box>
                </Grid>
            </Toolbar>
        </AppBar>
    } else {
        navComponent1 = <AppBar position="static">
            <Toolbar className='nav-main' >

                <Grid xs={4}>

                </Grid>

                <Grid xs={5} className="container">
                    <Box className="nav-link">
                        <Link to='/home' className="link">
                            <Typography variant="h6" color="inherit" className="typography">
                                home
                            </Typography>
                        </Link>

                        <Link to='/produtos' className="link">
                            <Typography variant="h6" color="inherit" className="typography">
                                produtos
                            </Typography>
                        </Link>

                        <Link to='/sobre' className="link">
                            <Typography color="inherit" className="typography">
                                sobre nós
                            </Typography>
                        </Link>

                        <Link to='/contato' className="link">
                            <Typography color="inherit" className="typography">
                                contato
                            </Typography>
                        </Link>

                        <Link to='/login' className="link">
                            <Typography color="inherit" className="typography">
                                login
                            </Typography>
                        </Link>
                    </Box>
                </Grid>
            </Toolbar>
        </AppBar>
    }

    if (token != '') {


        navComponent2 = 
        
        
        <div className={classes.grow}>
        <AppBar position="static">
            <Toolbar className="toolbar">
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <img src="https://i.imgur.com/LSGPpin.png" height="56px" />
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                    mercado limpo
                </Typography>
                <div className={classes.search}>
                    <div className="searchIcon">
                        <SearchIcon />
                    </div>
                    <InputBase 
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
               
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={5} color="secondary">
                            <FavoriteIcon />  
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={5} color="secondary">
                        < ShoppingCartIcon /> 
                        </Badge>
                    </IconButton>
                    
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>

                </div>
                <div className={classes.sectionMobile}>
                    <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
    </div>
    } else {
        navComponent2 = <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar className="toolbar">
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <img src="https://i.imgur.com/LSGPpin.png" height="56px" />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        mercado limpo
                    </Typography>
                    <div className={classes.search}>
                        <div className="searchIcon">
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                   
                    <div className={classes.sectionMobile}>
                       
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    }


    return (
        <>  
            {navComponent2}
            {navComponent1}
            


        </>
    );
}

export default Navbar;