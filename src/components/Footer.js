import React from 'react';
import _ from 'lodash';

import Action from './Action';
import { htmlToReact } from '../utils';
import { Link, withPrefix, classNames, getPageUrl } from '../utils';

export default class Footer extends React.Component {
    render() {
        const config = _.get(this.props, 'config');
        const footer = _.get(config, 'footer');
        const hasNav = _.get(footer, 'has_nav');
        const navLinks = _.get(footer, 'nav_links');
        const hasSocial = _.get(footer, 'has_social');
        const socialLinks = _.get(footer, 'social_links');
        const copyright = _.get(footer, 'content');
        const links = _.get(footer, 'links');
        const page = _.get(this.props, 'page');
        const header = _.get(config, 'header');
        const logo = _.get(header, 'logo');
        const logoAlt = _.get(header, 'logo_alt', '');

        return (
            <footer className="site-footer">
                <div className="container container--lg">
                        {logo ? <Link className="navbar__logo" href={withPrefix('/')}><img src={withPrefix(logo)} alt={logoAlt} /></Link>
                            : <Link className="h4 navbar__title" href={withPrefix('/')}>{title}</Link>
                        }                    
                </div>
                <div className="container container--lg">
                    {((hasNav 
                    && !_.isEmpty(navLinks)) 
                    || (hasSocial && !_.isEmpty(socialLinks))) && (
                        <div>
                            <h5 style={{color: "#FFFFFF" }}><br/><br/>Find me @</h5>
                            <div className="site-footer__nav">
                                {hasNav && !_.isEmpty(navLinks) && (
                                    <ul className="site-footer__menu menu">
                                        {_.map(navLinks, (action, index) => (
                                            <li key={index}>
                                                <Action action={action} />
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                
                                {hasSocial && !_.isEmpty(socialLinks) && (
                                    <ul className="site-footer__social menu">
                                        {_.map(socialLinks, (action, index) => (
                                            <li key={index}>
                                                <Action action={action} />
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    )}
                    <div className="site-footer__copyright align-center">
                        {copyright && 
                        <h6>
                            <br/>
                            <br/>
                            {copyright}
                        </h6>
                        }
                    </div>
                </div>
            </footer>
        );
    }
}
