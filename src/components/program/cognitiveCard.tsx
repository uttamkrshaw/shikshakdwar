"use client";
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const CognitiveCard: React.FC = () => {
  // State to track if the video is playing or not
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Handler to set the video playing state to true when clicked
  const handleVideoClick = (): void => {
    setIsPlaying(true);
  };

  const videoId = "Ex-nsHXe1XI"; // Your YouTube video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`; // Correct thumbnail URL

  return (
    <div className="flex flex-col md:flex-row justify-between p-8 space-y-8 md:space-y-0 px-32 py-10  gap-5">
      {/* Left Side - YouTube Video */}
      <div className="w-full md:w-1/2 flex justify-center rounded-2xl " style={{ height: '360px' }} >
        {/* Show YouTube Thumbnail before the video starts playing */}
        {!isPlaying ? (
          <div
            onClick={handleVideoClick} // When the thumbnail is clicked, set video to play
            className="relative cursor-pointer w-full h-full rounded-2xl  "
          >
            <img
              src={thumbnailUrl} // Correct thumbnail URL
              alt="YouTube Thumbnail"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">
              ▶
            </div>
          </div>
        ) : (
          // Once clicked, play the video
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`} // YouTube video URL
            playing={isPlaying} // Control the play state
            controls={true} // Show video controls (play/pause, volume, etc.)
            width="100%" // Make the video responsive
            height="100%" // Make the video responsive
           
          />
        )}
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4 h-full shadow-md py-12 px-6 rounded-2xl">
        <h2 className="text-4xl font-semibold ">
        What is Cognitive Learning Mastery?
        </h2>
        <h3 className="text-2xl text-[#002060] font-medium">LEARN MORE ABOUT WHAT WE DO</h3>
        <p className="text-lg text-gray-700">
        Cognitive Learning Mastery" a program, teaches intellectual abilities your student needs for academic success. The skills and abilities are taught through workbook, computer, and physical exercises at the student’s individual pace for early childhood education
        </p>
      </div>
    </div>
  );
};

export default CognitiveCard;
