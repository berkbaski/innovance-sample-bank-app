import { FastAction } from '../../services/menu/types';
import styles from './index.module.css';

type FastActionsProp = {
    items: FastAction[];
    title?: string;
};

const FastActions = ({ title, items }: FastActionsProp) => {
    return (
        <>
            {title && <h5 className={styles.fastActionsMenuTitle}>{title}</h5>}
            <div>
                {items.map((item) => (
                    <button
                        key={`fast-menu-item-${item.id}`}
                        className={styles.fastActionsMenuButton}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
        </>
    );
};

export default FastActions;
