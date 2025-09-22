import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <main className="page">
      <header className="page__header">
        <h1 className="page__title">Подборка новостроек</h1>
      </header>

      <section className="cards-grid" aria-label="Список проектов">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}
