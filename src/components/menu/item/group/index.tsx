import styles from './index.module.css';

type MenuItemGroupProps = {
    children: React.ReactNode;
    title?: string;
};

const MenuItemGroup = ({ children, title }: MenuItemGroupProps) => {
    return (
        <>
            {title && <h5 className={styles.menuItemGroupTitle}>{title}</h5>}
            <ul className={styles.menuItemGroup}>{children}</ul>
        </>
    );
};

export default MenuItemGroup;
