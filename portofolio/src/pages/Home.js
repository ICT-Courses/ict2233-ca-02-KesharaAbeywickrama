import profileImg from '../assets/profile.jpg';

export default function Home() {
  return (
    <section className="text-center mt-16">
      <img
        src={profileImg}
        alt="Your Name"
        className="mx-auto rounded-full w-32 h-32 mb-4"
      />
      <h1 className="text-5xl font-bold mb-2">Keshara Abeywickrama</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
        Your tagline or profession
      </p>
      <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400">
        Welcome to my personal portfolio website! Here you can explore my projects, learn about my skills, and contact me.
      </p>
    </section>
  );
}
