import React from 'react';
import styles from './index.module.css';

type TextButtonProps = {
    children: React.ReactNode;
    className?: string;
};

const TextButton = ({ children, className }: TextButtonProps) => {
    const classNames = [styles.textButton, className].join(' ');
    return <div className={classNames}>{children}</div>;
};

export default TextButton;
