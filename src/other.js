import React from 'react'
import {ThemeContext} from './contextapi';
import {useContext} from 'react';
export default function Other() {
    const {color}= useContext(ThemeContext);
    return (
        <div>
            <section style={{width: '100%', height: '200px',background:color}}>section</section>
        </div>
    )
}
