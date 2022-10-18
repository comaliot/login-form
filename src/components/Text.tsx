import React from 'react';
import styles from '../styles/text.module.css';

interface Props {
  title: string;
}

export default function Text(props: Props) {
  return <p className={styles.body_text}>{props.title}</p>;
}
