import { Link } from 'react-router-dom';
import styles from './index.module.css';

type MenuItemProps = {
    children?: React.ReactNode;
    isActive?: boolean;
    path: string;
};

const MenuItem = ({ children, isActive, path }: MenuItemProps) => {
    const classNames = [styles.menuItem, ...[isActive ? styles.activeMenuItem : {}]].join(' ');
    return (
        <li className={classNames}>
            <Link to={path}>{children}</Link>
        </li>
    );
};

export default MenuItem;
