import React from 'react';
import styles from './index.module.css';

type TextButtonGroupProps = {
    children: React.ReactNode;
    className?: string;
};

const TextButtonGroup = ({ children, className }: TextButtonGroupProps) => {
    const classNames = [styles.textButtonGroup, className].join(' ');
    return <div className={classNames}>{children}</div>;
};

export default TextButtonGroup;
