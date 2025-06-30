import React from 'react';
import { motion } from 'framer-motion';
import EventForm from '../components/EventForm';
import '../styles/main.css';

const Home = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        📣 Event Announcement System
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Subscribe to events and stay updated!
      </motion.p>

      <EventForm />
    </motion.div>
  );
};

export default Home;
