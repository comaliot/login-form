import React from 'react';
import styles from '../styles/form.module.css';

export default function Form() {
  return (
    <div className={styles.form_wrapper}>
      <form className={styles.form}>
        <label>
          Email
          <input type="email" name="email" placeholder="Email address" />
        </label>
        <label>
          Password
          <input type="password" name="password" placeholder="Password" />
        </label>
        <button className={styles.button}>Sign In</button>
      </form>
    </div>
  );
}
