import React from 'react';
import firebase from '../config';
import {Button} from 'antd'
import { Link } from 'react-router-dom';

export function Triplist(){

    React.useEffect(() => {
        console.log("ghg")
        firebase.database().ref('trips').on('value',value => {
            console.log(value.val())
        })
    },[])

    return (

        <div>         
            <div>Spis wycieczek</div>
            <Button type='primary' ><Link to="trip-form">Dodaj wycieczkę</Link></Button>
         </div>
    )
}