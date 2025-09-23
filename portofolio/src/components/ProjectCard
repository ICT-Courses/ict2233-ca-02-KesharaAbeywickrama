export default function ProjectCard({ title, description, imageUrl, repoLink, liveDemo }) {
  return (
    <div className="border rounded-lg shadow p-4 bg-white dark:bg-gray-900">
      <img src={imageUrl} alt={title} className="rounded-md mb-4 w-full h-48 object-cover" />
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <div className="space-x-4">
        {repoLink && (
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            GitHub Repo
          </a>
        )}
        {liveDemo && (
          <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
