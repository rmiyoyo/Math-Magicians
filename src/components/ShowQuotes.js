import { useEffect, useState } from 'react';

const ShowQuotes = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=architecture', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'Wx7M7nLgibwNws0Ux6s2GS5CCUY9b6AilguHoKoa',
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setQuote(data[0].quote);
      } catch (err) {
        setHasError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p className="fetched-data">Quote is loading...</p>;
  }

  if (hasError) {
    return <p className="fetched-data">Oops. Error. But its not your fault.</p>;
  }

  return <p className="fetched-data">{quote}</p>;
};

export default ShowQuotes;
