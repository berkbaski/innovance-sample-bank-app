import React from 'react';
import styles from './index.module.css';

type ButtonProps = {
    children: React.ReactNode;
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

const Button = ({ children, className, ...props }: ButtonProps) => {
    const classNames = [styles.button, className].join(' ');
    return (
        <button className={classNames} {...props}>
            {children}
        </button>
    );
};

export default Button;
