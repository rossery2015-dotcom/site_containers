import Image from 'next/image';
import Badge from './Badge';
import MetaChip from './MetaChip';
import Popover from './Popover';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectCard__media}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          className={styles.projectCard__img}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={project.id <= 3}
        />
        <div className={styles.projectCard__badges}>
          {project.badges.map((badge, index) => (
            <Badge
              key={index}
              text={badge.text}
              type={badge.type}
              icon={badge.icon}
            />
          ))}
        </div>
      </div>
      <div className={styles.projectCard__body}>
        <h2 className={styles.projectCard__title}>{project.title}</h2>
        <div className={styles.projectCard__meta}>
          <MetaChip type="location">
            {project.location}
          </MetaChip>
          <MetaChip type="time">
            {project.timeToCenter}
          </MetaChip>
        </div>
        <div className={styles.projectCard__price}>{project.price}</div>

        <Popover
          totalApartments={project.totalApartments}
          detailsLink={project.detailsLink}
          apartments={project.apartments}
          decoration={project.decoration}
        />
      </div>
    </article>
  );
}
