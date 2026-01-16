import React from 'react';
import styles from '/src/styles/components/UI/welcomeMessage.module.css';

interface WelcomeMessageProps {
    title?: string;
    subtitle?: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({
    title = 'Discipline is doing what you hate to do, but nonetheless doing it like you love it.',
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
            </div>
        </div>
    );
};

export default WelcomeMessage;