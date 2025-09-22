import LocationIcon from './icons/LocationIcon';
import TimeIcon from './icons/TimeIcon';
import styles from './MetaChip.module.css';

export default function MetaChip({ type, children, className = '', onClick }) {
  const baseClasses = styles.metaChip;
  const classes = `${baseClasses} ${className}`.trim();

  const getIcon = () => {
    switch (type) {
      case 'location':
        return <LocationIcon />;
      case 'time':
        return <TimeIcon />;
      default:
        return null;
    }
  };

  return (
    <span className={classes} onClick={onClick}>
      {getIcon()}
      {children}
    </span>
  );
}
