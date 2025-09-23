import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import exampleImg from '../assets/project1.jpg';

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch('https://api.github.com/users/your-github-username/repos');
      const data = await response.json();
      setRepos(data.slice(0, 3));
    }
    fetchRepos();
  }, []);

  return (
    <section className="mt-16 grid md:grid-cols-3 gap-8 px-4">
      {repos.map((repo) => (
        <ProjectCard
          key={repo.id}
          title={repo.name}
          description={repo.description || 'No description'}
          imageUrl={exampleImg}
          repoLink={repo.html_url}
          liveDemoLink={null} 
        />
      ))}
    </section>
  );
}
