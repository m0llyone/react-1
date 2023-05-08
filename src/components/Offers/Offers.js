import styles from './Offers.module.css';
import { List } from '../data/List';

export const Offers = () => {
  const redPrice = styles.price + ' ' + styles.priceColor;
  const buttonHover = styles.button + ' ' + styles.buttonHover;
  const dollar = '$';
  return (
    <div className={styles.container}>
      {List.map((item) => (
        <div className={styles.offer} key={item.id}>
          {item.popular ? (
            <div className={styles.containerTitle}>
              <h5 className={styles.popular}>{'popular'}</h5>
              <h6 className={styles.title}>{item.title}</h6>
            </div>
          ) : (
            <h6 className={styles.title}>{item.title}</h6>
          )}
          {item.priceColor ? (
            <>
              <span className={styles.dollar}>{dollar}</span>
              <span className={redPrice}>{item.price}</span>
            </>
          ) : (
            <>
              <span className={styles.dollar}>{dollar}</span>
              <span className={styles.price}>{item.price}</span>
            </>
          )}
          <p className={styles.text}>{item.text}</p>
          <p className={styles.GB}>{item.GB}</p>
          {item.priceColor ? (
            <button className={buttonHover}>{item.button}</button>
          ) : (
            <button className={styles.button}>{item.button}</button>
          )}
        </div>
      ))}
    </div>
  );
};
