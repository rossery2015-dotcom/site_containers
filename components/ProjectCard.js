import Image from 'next/image';
import Badge from './Badge';
import MetaChip from './MetaChip';
import Popover from './Popover';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const handleBadgeClick = (badgeText) => {
    console.log('Badge clicked:', badgeText);
    // Здесь можно добавить логику для обработки клика по бейджу
  };

  const handleMetaChipClick = (type, value) => {
    console.log('MetaChip clicked:', type, value);
    // Здесь можно добавить логику для обработки клика по мета-чипу
  };

  const handleTitleClick = () => {
    console.log('Title clicked:', project.title);
    // Здесь можно добавить логику для перехода к детальной странице проекта
  };

  const handlePriceClick = () => {
    console.log('Price clicked:', project.price);
    // Здесь можно добавить логику для показа калькулятора или модального окна
  };

  return (
    <article className={styles.projectCard}>
      <div className={styles.media}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          className={styles.img}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={project.id <= 3}
        />
        <div className={styles.badges}>
          {project.badges.map((badge, index) => (
            <Badge
              key={index}
              text={badge.text}
              type={badge.type}
              icon={badge.icon}
              onClick={() => handleBadgeClick(badge.text)}
            />
          ))}
        </div>
      </div>
      <div className={styles.body}>
        <h2 
          className={styles.title}
          onClick={handleTitleClick}
          style={{ cursor: 'pointer' }}
        >
          {project.title}
        </h2>
        <div className={styles.meta}>
          <MetaChip 
            type="location"
            onClick={() => handleMetaChipClick('location', project.location)}
          >
            {project.location}
          </MetaChip>
          <MetaChip 
            type="time"
            onClick={() => handleMetaChipClick('time', project.timeToCenter)}
          >
            {project.timeToCenter}
          </MetaChip>
        </div>
        <div 
          className={styles.price}
          onClick={handlePriceClick}
          style={{ cursor: 'pointer' }}
        >
          {project.price}
        </div>

        <div className={styles.popover}>
          <Popover
            totalApartments={project.totalApartments}
            detailsLink={project.detailsLink}
            apartments={project.apartments}
            decoration={project.decoration}
          />
        </div>
      </div>
    </article>
  );
}
