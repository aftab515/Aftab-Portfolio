import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send('service_9o0n56s', 
      'template_4x9yqab',
        {
          from_name: form.name,
          to_name: "Aftab",
          from_email: form.email,
          to_email: "aftabsadiq515@gmail.com",
          message: form.message,
        },
        'MQvf5zrhZRk09vYMK'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-white py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-white py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-white py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold shadow-md shadow-secondary'
          >
            {loading ? "Sending..." : "Send"}
          </button>

          <div className="flex items-center gap-4 mx-auto">
        {/* LinkedIn button */}
        <a
          href="https://www.linkedin.com/in/aftabsadiq1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/assets/linkedIn.png" // Add the path to your LinkedIn icon image
            alt="LinkedIn"
            className="w-8 h-8"
          />
        </a>

        {/* GitHub button */}
        <a
          href="https://github.com/aftab515"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/assets/github.png" // Add the path to your GitHub icon image
            alt="GitHub"
            className="w-8 h-8"
          />
        </a>
        {/* WhatsApp button */}
    <a
      href="https://wa.me/923007920009" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/src/assets/whatsapp.png" // Add the path to your WhatsApp icon image
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
      </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
