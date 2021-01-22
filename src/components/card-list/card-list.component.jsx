import React from 'react';
import {Card} from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
        {props.person.map(person => (
            <Card key={person.id} person={person} />
        ))}
    </div>
);