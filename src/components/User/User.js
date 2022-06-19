import React from 'react';
import styles from './User.module.css';

class User extends React.Component {
    render() {
    const {
        inputName,
        inputLastName,
        inputDOB,
        inputNum,
        inputWeb,
        textAbout,
        textStack,
        textProject,
    } = this.props.user;
    
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>
          {' '}
          {inputName} {inputLastName}
        </h1>
        <p>Дата рождения: {inputDOB}</p>
        <p>Номер телефона: {inputNum}</p>
        <p>Сайт: {inputWeb}</p>
        <p>О вас: {textAbout}</p>
        <p>Ваш стек: {textStack}</p>
        <p>Описание последнего проекта: {textProject}</p>
      </div>
    );
  }
}

export default User;