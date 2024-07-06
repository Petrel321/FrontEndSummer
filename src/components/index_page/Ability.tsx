import React from 'react';
import styles from '@/styles/index_page/Ability.module.css';


interface AbilityProps {
    name: string;
}

const Ability: React.FC<AbilityProps> = ({ name }) => {
    return (
        <li className={`${styles.main__list_item}`}><span>{name}</span></li>
    );
};

export default Ability;