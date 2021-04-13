import React from "react";
import { withRouter } from 'react-router';

import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import HeaderContainer from "carbon-components-react/lib/components/UIShell/HeaderContainer";
import {
    Header,
    HeaderMenuButton,
    HeaderName,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    SideNavLink
} from "carbon-components-react/lib/components/UIShell";
import '../App.css';

const Fade16 = () => (
    <svg
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
    >
        <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
    </svg>
);

function Layout(props) {
    return (
        <div className="container">
            <HeaderContainer data-test='headerComponent'
                render={() => (
                    <>
                        <Header aria-label="Mobigesture Platform Name">
                            <SkipToContent />
                            <HeaderName prefix="">
                                Mobigesture
                            </HeaderName>
                            <HeaderGlobalBar>
                                <HeaderGlobalAction aria-label="Search">
                                    <Search20 />
                                </HeaderGlobalAction>
                                <HeaderGlobalAction aria-label="Notifications">
                                    <Notification20 />
                                </HeaderGlobalAction>
                                <HeaderGlobalAction aria-label="App Switcher">
                                    <AppSwitcher20 />
                                </HeaderGlobalAction>
                            </HeaderGlobalBar>
                            <SideNav aria-label="Side navigation" className="sidebar" data-test="headerNavigation">
                                <SideNavItems>
                                    <SideNavLink
                                        data-test="employeeList"
                                        renderIcon={Fade16}
                                        onClick={() => props.history.push('/employees')}
                                    >
                                        Employees List
                                    </SideNavLink>
                                </SideNavItems>
                            </SideNav>
                        </Header>
                    </>
                )}
            />
        </div>
    )
}

export default withRouter(Layout)