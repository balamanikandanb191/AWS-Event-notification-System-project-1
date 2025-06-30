const config = {
  apiUrl: process.env.REACT_APP_API_URL,
};

export const createEvent = async (eventData) => {
  const res = await fetch(config.apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData)
  });
  return res.json();
};
