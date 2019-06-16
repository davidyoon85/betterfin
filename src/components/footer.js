import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer_wrapper">
                <div className="footer">
                    <div className="footer">
                        <div className="footer-left">
                            <a className="footer-brand" href="/">
                                <img className="footer-img" src="https://camp-away-dev.s3.amazonaws.com/betterfin_logo.svg" />
                            </a>
                        </div>
                        <div className="footer-menu">
                            <a href="/" className="footer-link">HOME</a>
                            <a href="/privacy" className="footer-link">PRIVACY&nbsp;POLICY</a>
                            <a href="/terms" className="footer-link">TERMS&nbsp;OF&nbsp;Service</a>
                            <a href="/help-center" className="footer-link">718-416-9507</a>
                        </div>
                        {/* <div className="footer-right"></div> */}
                        <div className="footer-bottom">
                            <div className="footer_social">
                                <a className="footer_social_icon" href="https://twitter.com/betterfin">
                                    <img className="social_icon" src="https://assets.website-files.com/5c794ffa39d1ad7a031cec44/5c794ffb39d1ad099a1ced4e_twitter-icon-color.svg" />
                                </a>
                                <a className="footer_social_icon" href="https://www.instagram.com/betterfin/">
                                    <img className="social_icon" src="https://assets.website-files.com/5c794ffa39d1ad7a031cec44/5c794ffb39d1ad813e1ced4c_instagram-icon-color.svg" />
                                </a>
                            </div>
                            <div className="footer_info">
                                <div>Proudly Built in&nbsp;Brooklyn, New York</div>
                                <div className="divider w-hidden-tiny"></div>
                                    <div>
                                        <a href="mailto:info@betterfin.com?subject=I%20have%20a%20question" target="_blank" className="link-grey">&nbsp;All Rights Reserved 2019,&nbsp;Betterfin,&nbsp;Inc.</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;