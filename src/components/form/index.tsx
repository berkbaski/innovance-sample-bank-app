import React from 'react';
import styles from './index.module.css';

type FormProps = {
    children: React.ReactNode;
} & React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
>;

const Form = ({ children, ...props }: FormProps) => {
    return (
        <form className={styles.form} {...props}>
            {children}
        </form>
    );
};

export default Form;
