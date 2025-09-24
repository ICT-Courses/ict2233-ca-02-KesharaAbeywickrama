import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function validate() {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Valid email is required';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } else setSuccess(false);
  }

  return (
    <section className="max-w-md mx-auto my-20 px-4">
      <h2 className="text-4xl font-semibold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 mb-4 border rounded"
        />
        {errors.name && <p className="text-red-600 mb-4">{errors.name}</p>}

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-2 mb-4 border rounded"
        />
        {errors.email && <p className="text-red-600 mb-4">{errors.email}</p>}

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className="w-full p-2 mb-4 border rounded"
        />
        {errors.message && <p className="text-red-600 mb-4">{errors.message}</p>}

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Send
        </button>

        {success && <p className="mt-4 text-green-600 text-center">Message sent successfully!</p>}
      </form>

      <div className="mt-8 text-center space-x-4">
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="hover:underline">
          GitHub
        </a>
        <a href="kesharaabeywickrama@gmail.com" className="hover:underline">
          Email
        </a>
      </div>
    </section>
  );
}