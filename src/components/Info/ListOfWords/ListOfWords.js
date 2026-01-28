import React from 'react';
import Card from '../../UI/Card/Card';
import * as styles from './ListOfWords.css';

const listOfWords = (props) => {
  const words = props.words.map(x => (
    <p key={x.word}>
      <a href={'http://sum.in.ua/s/' + x.word} target={'_blank'} rel="noopener noreferrer">
        {x.word}
      </a>
      { ' — ' + x.score}
    </p>
  ));
  return (
    <Card heading={props.heading}>
      <div className={styles.ListOfWords}>
        {words}
      </div>
    </Card>
  );
}

export default listOfWords;