import React, { useState } from 'react';
import './HomePage.css'; 
import AnsOption from './components/AnsOption';

const HomePage = () => {
    const handleSelectedItem = (item) => console.log(item);
    const answers = ["1", "2", "3", "4"];
    return (
        <div>
            <h1 id="headline"> Welcom To MyTrivia</h1>
            <h3>Are you ready to start? </h3>    
            <AnsOption question ="first question" answers = {answers} handleSelectedItem = {handleSelectedItem} ></AnsOption>
        </div>
       
        
    );
}

export default HomePage