import React from 'react';
import styles from './List.scss'; 
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
//import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser'; 


class List extends React.Component {
    // state = {
    //   columns: this.props.columns || [], 
    // }
    static propTypes = {
      title: PropTypes.node.isRequired, 
      image: PropTypes.string,
      description: PropTypes.node, 
      columns: PropTypes.array,
    }
    static defaultProps = {
      children: settings.defaultListDescription,
    }
    // addColumn(title) {
    //   this.setState(state => (
    //     {
    //       columns: [
    //         ...state.columns,
    //         {
    //           key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
    //           title,
    //           icon: 'list-alt',
    //           cards: [],
    //         },
    //       ],
    //     }
    //   ));
    // }
    render() {
      const {title, image, description, columns} = this.props;
      return (
        <section className={styles.component}>
          <Hero titleText={title} image={image}/>
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          <div className={styles.columns}> 
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
          
          {/*<div className={styles.columns}>
                   <Column title={'Zwierzęta'}/>
                   <Column title={'Rośliny'}/>
                   <Column title={'Minerały'}/>
                </div>*/}
          {/* <div className={styles.columns}>
            {this.state.columns.map(({key, ...columnProps}) => (
              <Column key={key} {...columnProps} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={title}
           */}
          
          {/*  */}
        </section> 
      );
    }
}

export default List; 