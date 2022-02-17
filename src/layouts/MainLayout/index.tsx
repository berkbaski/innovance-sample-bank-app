import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { isDesktop } from 'react-device-detect';
import { FastActions, MenuItem, MenuItemGroup, UserCard } from '../../components';
import { SESSION_STORAGE_LOGGED_MENU_ITEMS } from '../../const';
import { AppState } from '../../duck/store';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import i18n from '../../i18n';
import { HamburgerIcon, LogoutIcon, SpinnerIcon } from '../../icons';
import { getFastActions, getLeftMenuItems } from '../../services/menu';
import { FastAction, LeftMenuItem } from '../../services/menu/types';
import styles from './index.module.css';

type MainLayoutProps = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
    const location = useLocation();
    const { user } = useSelector((state: AppState) => state.auth);
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [sessionStorageMenuItems, setSessionStorageMenuItems] = useSessionStorage(
        SESSION_STORAGE_LOGGED_MENU_ITEMS
    );
    const [fastMenuItems, setFastMenuItems] = useState<FastAction[]>(() => {
        return sessionStorageMenuItems?.fast || [];
    });
    const [leftMenuItems, setLeftMenuItems] = useState<LeftMenuItem[]>(() => {
        return sessionStorageMenuItems?.left || [];
    });
    const [currentMenu] = useState<string>(() => {
        const selectedFastAction = fastMenuItems.find((f) => f.link === location.pathname);
        const selectedLeftMenu = leftMenuItems.find((f) => f.link === location.pathname);

        return selectedFastAction?.title || selectedLeftMenu?.title || '';
    });
    const [loading, setLoading] = useState<boolean>(() => {
        return !fastMenuItems?.length || !leftMenuItems?.length;
    });
    useEffect(() => {
        if (!fastMenuItems?.length || !leftMenuItems.length) {
            Promise.all([getFastActions(), getLeftMenuItems()]).then(
                ([fastMenuItemsResponse, leftMenuItemsResponse]) => {
                    setFastMenuItems(fastMenuItemsResponse);
                    setLeftMenuItems(leftMenuItemsResponse);
                    setSessionStorageMenuItems({
                        fast: fastMenuItemsResponse,
                        left: leftMenuItemsResponse
                    });
                    setLoading(false);
                }
            );
        }
        // TODO React Hook useEffect has a missing dependency: 'setSessionStorageMenuItems'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
        // eslint-disable-next-line
    }, [fastMenuItems, leftMenuItems]);

    const LeftMenuSection = () => (
        <section className={styles.leftMenu}>
            {user && (
                <UserCard
                    firstName={user.firstName}
                    lastName={user.lastName}
                    username={user.username}
                    leftImage={user.image}
                    rightImage={LogoutIcon}
                    rightImageClass="userCardRightImageButton"
                />
            )}
            {loading ? (
                <div className={styles.loadingContainer}>
                    <img src={SpinnerIcon} alt="Loading spinner" />
                </div>
            ) : (
                <>
                    <MenuItemGroup title={i18n.t('myMenu')}>
                        {leftMenuItems.map((leftMenuItem) => (
                            <MenuItem
                                key={`leftMenuItem-${leftMenuItem.id}`}
                                path={leftMenuItem.link}
                                isActive={leftMenuItem.link === location.pathname}
                            >
                                {leftMenuItem.title}
                            </MenuItem>
                        ))}
                    </MenuItemGroup>
                    <FastActions title={i18n.t('fastActions')} items={fastMenuItems} />
                </>
            )}
        </section>
    );

    const TopMenuSection = ({ children }: { children: React.ReactNode }) => (
        <div className={styles.mobileHeader}>
            <div className={styles.mobileHeaderContent}>
                <h5 className={styles.mobileHeaderNavigationText}>{currentMenu}</h5>
                <img
                    src={HamburgerIcon}
                    className={styles.mobileHeaderHamburgerIcon}
                    onClick={() => setOpenMenu(!openMenu)}
                    alt=""
                />
            </div>
            {openMenu && children}
        </div>
    );

    return (
        <div className={['container', styles.layoutContainer].join(' ')}>
            {isDesktop && <LeftMenuSection />}
            {!isDesktop && (
                <TopMenuSection>
                    <LeftMenuSection />
                </TopMenuSection>
            )}
            <main className={styles.layoutContent}>{children}</main>
        </div>
    );
};

export default MainLayout;
