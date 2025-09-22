import StarIcon from './icons/StarIcon';
import styles from './Badge.module.css';

export default function Badge({ text, type = 'default', icon = false, className = '', onClick }) {
  const baseClasses = styles.badge;
  const typeClasses = {
    default: '',
    muted: styles['badge--muted'],
    accent: styles['badge--accent']
  };
  
  const classes = `${baseClasses} ${typeClasses[type]} ${className}`.trim();

  return (
    <span className={classes} onClick={onClick}>
      {icon && type === 'accent' && <StarIcon />}
      {text}
    </span>
  );
}
