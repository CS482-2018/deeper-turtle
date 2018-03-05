import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, {ListItem, ListItemText}from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        width: '100%',
        minHeight: '98vh',
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },

    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerHeader: theme.mixins.toolbar,
    drawerPaper: {
        width: 250,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'relative',
            height: '100%',
        },
    },
    content: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        padding: theme.spacing.unit * 3,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
    button: {
        marginLeft: 'auto',
        marginRight: 0,
    }
});

/**
 *  This componenet represnets the frame of the web app.  It has an
 *  AppBar and a navigation drawer.  The drawer is responsive.  It
 *  is persistent on desktop screens and hidden on mobile.
 *
 *  Components that will be displayed within the frame should be children
 *  of this componenet
 *
 *  Code is based on material-ui-next documentation at:
 *      https://material-ui-next.com/demos/drawers/
*/
class AppFrame extends React.Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    render() {
        const { classes, theme } = this.props;

        const TestPageLink = props => <Link to="/test" {...props} />
        const HomePageLink = props => <Link to="/" {...props} />
        const CodeGenLink = props => <Link to="/code-gen" {...props} />
        const KeenanPageLink = props => <Link to="/Keenan" {...props} />
        const HelperLink = props => <Link to="/Helper" {...props} />
        const LoginLink = props => <Link to="/login" {...props} />

        const drawer = (
            <div>
                <div className={classes.drawerHeader} />
                <Divider />
                <List>
                        <ListItem button component={HomePageLink}>
                                <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button component={TestPageLink}>
                                <ListItemText primary="Scheduler"/>
                        </ListItem>
                        <ListItem button component={KeenanPageLink}>
                                <ListItemText primary="Keenan Page"/>
                        </ListItem>
                        {this.props.isAuthenticated ?
                            <div>
                                <ListItem button component={CodeGenLink}>
                                        <ListItemText primary="Code Gen"/>
                                </ListItem>
                                 <ListItem button component={HelperLink}>
                                        <ListItemText primary="Helper"/>
                                </ListItem>
                            </div>: null
                        }
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerToggle}
                                className={classes.navIconHide}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" noWrap>
                                KLF Data Entry
                            </Typography>
                            {!this.props.isAuthenticated ?
                                <Button component={LoginLink} className={classes.button} color="inherit">KLF Login</Button> :
                                <Button className={classes.button} color="inherit" onClick={this.props.onLogout}>Logout</Button> }
                        </Toolbar>
                    </AppBar>
                    <Hidden mdUp>
                        <Drawer
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            onClose={this.handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden smDown implementation="css">
                        <Drawer
                            variant="permanent"
                            open
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <div className={classes.content}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}


AppFrame.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    onLogout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppFrame);
