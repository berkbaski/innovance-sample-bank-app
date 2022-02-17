import styles from './index.module.css';

type UserCardProps = {
    firstName: string;
    lastName: string;
    username: string;
    leftImage?: string;
    rightImage?: string;
    rightImageClass?: string;
};

const UserCard = ({
    firstName,
    lastName,
    username,
    leftImage,
    rightImage,
    rightImageClass
}: UserCardProps) => {
    const rightImageClasses = [
        styles.userCardRightImage,
        rightImageClass ? styles[rightImageClass] : undefined
    ].join(' ');
    return (
        <div className={styles.userCard}>
            <div className={styles.userCardContent}>
                {leftImage && <img src={leftImage} className={styles.userCardLeftImage} alt="" />}
                <div>
                    <h3 className={styles.userCardFirstLastName}>
                        {firstName} {lastName}
                    </h3>
                    <h5 className={styles.userCardUsername}>{username}</h5>
                </div>
            </div>
            {rightImage && <img src={rightImage} className={rightImageClasses} alt="" />}
        </div>
    );
};

export default UserCard;
