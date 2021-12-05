import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import {pageContents, listData} from '../../data/dataStore';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
      <h1 className={styles.title}>{pageContents.title}</h1>
      <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
      {/*<List title={['Rzeczy do zrobienia', <sup key='1'>soon!</sup>]} image={'https://images.pexels.com/photos/6746077/pexels-photo-6746077.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}>
        <p>Planuje wykonać te rzeczy szybciej niż później!</p>

    </List>*/}
    <List {...listData} />
      </main>
    )
    
  }
}

export default App;