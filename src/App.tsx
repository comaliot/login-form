import React from 'react';
import Form from './components/Form';
import Heading from './components/Heading';
import Text from './components/Text';
import styles from './styles/wrapper.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Heading title="Welcome back" />
        <Text title="Welcome back! Please enter your details." />
        <Form />
      </div>
    </div>
  );
}

export default App;
