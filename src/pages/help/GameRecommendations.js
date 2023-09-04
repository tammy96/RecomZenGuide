// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import { openai } from '../../config/openaiConfig';

const GameRecommendations = () => {
  const [recommendations, setRecommendations] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // this is the syntax for sending the message as a string inside the prompt
// const musicArr = songArr.join(', ')
  
  const songArr = ["action", "racing", "adventure"]
  const musicArr = songArr.join(', ')

  // Function to generate a prompt
  function generatePrompt(musicArr) {
    return `Suggest ten games with the year they were released based on ${musicArr}`;
  }

  // Function to fetch song recommendations
  async function fetchSongRecommendations() {
    // Set loading state to true before making the request
    setIsLoading(true); 
    console.log("elo")

    try {
      const response = await openai.completions.create({
        model: 'text-davinci-003',
        prompt: generatePrompt(musicArr),
        max_tokens: 150,
        temperature: 0.6,
      });

      console.log(response)
      console.log(response.choices[0].text);
     
      // when recommendations are separated by line breaks
      setRecommendations(response.choices[0].text.split('\n')); 
      
    } catch (error) {
      // Handle errors here
      console.error(error);
    } finally {
      // Set loading state to false when the request is complete (success or error)
      setIsLoading(false);
    }
  }

  return (
    <div>
      <h1>My GameLists Playlist</h1>

      {/* Conditionally render a loading indicator */}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {/* Render your content when not loading */}
          <button className='bg-black text-white w-fit p-3 my-3' onClick={fetchSongRecommendations}>Fetch My Favorite Games</button>
          <div>
              <ul>

              {Array.isArray(recommendations) ? (
                recommendations
                    .map(recommendation => recommendation.trim()) 
                    // Remove completely empty lines
                  .filter(recommendation => recommendation !== '') 
                  .map((recommendation, index) => (
                    <li className='border-b-2 border-b-solid py-1 text-gray-700' key={index}>{recommendation}</li>
                  ))
              ) : (
                <li>No Game Data available For Now, Wanna See Playlist? Click Button Above</li>
              )}
                
              </ul>

          </div>
        </div>
      )}
    </div>
  );
}




//   useEffect(() => {
// }

export default GameRecommendations;
