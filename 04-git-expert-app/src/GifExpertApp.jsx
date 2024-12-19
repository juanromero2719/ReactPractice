import React from 'react';
import { useState } from 'react';	
import { AddCategory } from './AddCategory';

export const GitExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const onAddCategory = () => {
        setCategories( [ 'hola', ...categories] );
    }

    return (
        <>

            {/* titulo */}
            <h1>GitExpertApp</h1>

            {/* input */}
            <AddCategory setCategories={setCategories}/>
            
            {/* Listado de Gif */}
            
            <ol>
                { categories.map( category => {
                    return <li key={category}>{category}</li>
                }) }
                
            </ol>
                {/* <Gif Item /> */}

        </>
    );
}