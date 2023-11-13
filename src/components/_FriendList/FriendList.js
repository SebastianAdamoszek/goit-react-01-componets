import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friendList }) => (
  <section className={styles.friends}>
    <ul className={styles.friend__list}>
      {friendList.map(({ id, avatar, name, isOnline }) => (
        <li className={styles.item} key={id}>
          <div className={styles.status}>
            <p
              className={
                isOnline ? styles.statusOnline__text : styles.statusOffline__text
              }
            >
              {isOnline ? 'Online' : 'Offline'}
            </p>
            <p
              className={isOnline ? styles.statusOnline : styles.statusOffline}
            ></p>
          </div>

          <img className={styles.avatar} src={avatar} alt="User avatar" />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  </section>
);

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;

// FriendList.propTypes = {
//   friend: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//     })
//   ).isRequired,
// };

// export default FriendList;
