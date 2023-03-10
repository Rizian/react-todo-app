import React from 'react';
import styles from '../styles/modules/title.module.css';

function PageTitle(props) {
    return (
        <h1 className={styles.title}>{props.text}</h1>
    );
}

export default PageTitle;