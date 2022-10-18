import React from 'react';
import styles from '../styles/text.module.css';

interface Props {
  title: string;
}

export default function Heading(props: Props) {
  return <h1 className={styles.heading_text}>{props.title}</h1>;
}
