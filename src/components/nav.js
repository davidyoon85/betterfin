import React, { Component } from 'react';

class Nav extends Component {
    constructor() {
        super();
        this.state = {
          user_name: ''
        };
      }
    
    componentDidMount() {
        this.formatUserName();
    }

    formatUserName() {
        let name = this.props.userName;
        name = name.toLowerCase()
        .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            
        name = name[0] + ' ' + name[1].slice(0,1)
        
        this.setState({ user_name: name });
    }

    render() {
        return (
        <div className="nav">
            <div className="navContent">
                <div className="navHeader">
                    <div className="betterfin-logo">
                        <a className="footer-img" href="/"><img src="https://camp-away-dev.s3.amazonaws.com/betterfin_logo.svg" alt="Nav" /></a>
                    </div>
                    <div className="drop-menu">
                        <div className="logout">
                            <div className="avatar">
                                <div className="avatar_img">
                                <svg className="avatar_svg" fill="currentColor" height="22" width="22" viewBox="0 0 24 24"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></svg>
                                </div>
                            </div>
                            <div className="nav-right">
                                <div className="user-name">
                                    {this.state.user_name}
                                </div>
                                <div className="menu">
                                    <div className="subMenu">
                                    <svg className="subMenu_svg" fill="currentColor" height="16" width="16" viewBox="0 0 24 24"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Nav;