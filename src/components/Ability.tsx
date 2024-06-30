import React from 'react';
import '../styles/Ability.css';


interface AbilityProps {
    name: string;
}

const Ability: React.FC<AbilityProps> = ({ name }) => {
    return (
        <li className="main__list-item"><span>{name}</span></li>
    );
};

export default Ability;