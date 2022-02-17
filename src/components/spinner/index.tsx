import { SpinnerIcon } from '../../icons';
import styles from './index.module.css';

const Spinner = ({ show }: { show?: boolean }) => {
    return show ? (
        <div className={styles.spinnerContainer}>
            <img src={SpinnerIcon} alt="Loading spinner" />
        </div>
    ) : (
        <></>
    );
};

export default Spinner;
