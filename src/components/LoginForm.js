import styles from './LoginForm.module.css'
import React from "react";

const LoginForm = () => {
    return (
        <div className="main">
            <form className={styles.form}>
                <label className={styles.label}>Name</label>
                <br></br>
                <input placeholder="Name..." type="text"></input>
                <br></br><br></br>
                <label className={styles.label}>Password</label>
                <br></br>
                <input placeholder="Password..." type="password"></input>
                <br></br><br></br>
                <button className={styles.input}>Submit</button>
            </form>
        </div>
    )
}
export default LoginForm