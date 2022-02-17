import MainLayout from '../../layouts/MainLayout';
import CreditCard from 'react-credit-cards';
import { useEffect, useState } from 'react';
import { Card } from '../../services/cards/types';
import { getCards } from '../../services/cards';
import styles from './index.module.css';
import { SpinnerIcon } from '../../icons';
import { useSelector } from 'react-redux';
import { AppState } from '../../duck/store';

const MyCards = () => {
    const [loading, setLoading] = useState<boolean>();
    const [cards, setCards] = useState<Card[]>([]);
    const { user } = useSelector((state: AppState) => state.auth);

    useEffect(() => {
        setLoading(true);
        Promise.all([getCards()]).then(([cards]) => {
            setCards(cards);
            setLoading(false);
        });
    }, []);

    return (
        <MainLayout>
            {loading && (
                <div className="loading-container">
                    <img src={SpinnerIcon} alt="Loading spinner" />
                </div>
            )}
            <div className={styles.cardsContainer}>
                {cards.map((card) => (
                    <CreditCard
                        cvc={''}
                        expiry={card.expireDate}
                        name={`${user?.firstName} ${user?.lastName}`}
                        number={card.number}
                    />
                ))}
            </div>
        </MainLayout>
    );
};

export default MyCards;
