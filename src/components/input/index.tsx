import React from 'react';
import styles from './index.module.css';

type InputProps = {
    error?: boolean;
    errorText?: string;
} & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

const Input = ({ className, ...props }: InputProps) => {
    const classNames = [className, styles.input].join(' ');
    return <input className={classNames} {...props} />;
};

export default Input;
