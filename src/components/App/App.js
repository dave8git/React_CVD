import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
import {pageContents, listData} from '../../data/dataStore';
import PropTypes from 'prop-types';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }
  render() {
    const {title, subtitle, lists} = this.props; 
    console.log('tytuł', title);
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {/*<List title={['Rzeczy do zrobienia', <sup key='1'>soon!</sup>]} image={'https://images.pexels.com/photos/6746077/pexels-photo-6746077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}>
        <p>Planuje wykonać te rzeczy szybciej niż później!</p>

    </List>*/}
        {/* <List {...listData} /> */}
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
    
  }
}

export default App;