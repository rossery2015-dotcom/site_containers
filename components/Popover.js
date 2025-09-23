import styles from './Popover.module.css';

export default function Popover({ 
  totalApartments, 
  detailsLink, 
  apartments, 
  decoration 
}) {
  return (
    <div className={styles.popover}>
      <div className={styles.header}>
        <span>{totalApartments}</span>
        <a href={detailsLink} className={styles.link} target="_blank" rel="noopener">
          Подробнее
        </a>
      </div>
      <ul className={styles.list}>
        {apartments.map((apartment, index) => (
          <li key={index}>
            <a href={apartment.link}>
              <span>{apartment.type}</span>
              <span className={styles.muted}>{apartment.area}</span>
              <span className={styles.price}>{apartment.price}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className={`${styles.footer} ${styles.muted}`}>{decoration}</div>
    </div>
  );
}
