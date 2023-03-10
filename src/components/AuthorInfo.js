import React from "react";
import styles from '../styles/modules/title.module.css';

function AuthorInfo(props) {
    return (
        <h2 className={styles.subtitle}>{props.text}</h2>
    )
}

export default AuthorInfo;