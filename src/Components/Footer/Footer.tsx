import './Footer.css'
import {CREATED_BY, AUTHOR_GITHUB_LINK, AUTHOR} from './Assets/constants'
import React from "react";

const Footer = () => {
    return (
        <div className="footer-container">
            &copy; {new Date().getFullYear()} {CREATED_BY}
            <a href={AUTHOR_GITHUB_LINK}> {AUTHOR}  </a>
        </div>
    );
};

export default Footer;
