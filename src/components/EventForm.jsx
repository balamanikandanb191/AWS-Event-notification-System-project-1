import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { createEvent } from '../services/eventService';
import '../styles/main.css';

const EventForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [events, setEvents] = useState([]); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEvent({ title, date, description }); 
    const newEvent = { title, date, description };
    setEvents([...events, newEvent]); 
    setTitle('');
    setDate('');
    setDescription('');
    alert("🎉 Event announced!");
  };

  return (
    <>
      <motion.form
        className="event-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>🎯 Create an Event</h2>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Event Title"
          required
        />
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Event Description"
          required
        />
        <button type="submit">Announce</button>
      </motion.form>

      <div className="event-list">
        <h3>📅 Upcoming Events</h3>
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <strong>{event.title}</strong> on {event.date}<br />
            <em>{event.description}</em>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventForm;
