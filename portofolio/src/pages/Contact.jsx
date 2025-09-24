import { useState } from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

{/* inputs with error messages */}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function validate() {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.message) newErrors.message = "Message is required";

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
      setFormData({ name: "", email: "", message: "" });
    } else setSuccess(false);
  }
  {/*social media icons with links */}
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/keshara-abeywickrama-8913b7314",
      color: "#0A66C2",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/KesharaAbeywickrama",
      color: "#333",
    },
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/share/16Ao9AQG6k/",
      color: "#1877F2",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/keshara.aaaa?igsh=aHBiOW1sc2Rjdm9u",
      color: "#E1306C",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:kesharaabeywickrama@gmail.com",
      color: "#D44638",
    },
  ];

  

  return (
    <section className="max-w-md mx-auto my-20 px-4">
      <h2 className="text-4xl font-semibold mb-6 text-cyan-400">Contact Me</h2>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-cyan-400 outline-none transition"
        />
        {errors.name && <p className="text-red-600">{errors.name}</p>}

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-cyan-400 outline-none transition"
        />
        {errors.email && <p className="text-red-600">{errors.email}</p>}

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-cyan-400 outline-none transition"
        />
        {errors.message && <p className="text-red-600">{errors.message}</p>}

        <button
          type="submit"
          className="w-full bg-cyan-400 text-white py-2 rounded hover:bg-cyan-500 transition transform hover:scale-105"
        >
          Send
        </button>

        {success && (
          <p className="mt-4 text-green-600 text-center animate-pulse">
            Message sent successfully!
          </p>
        )}
      </form>

      <div className="mt-8 flex justify-center gap-6 text-2xl">
        {socialLinks.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125"
            style={{ color: link.color }}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
