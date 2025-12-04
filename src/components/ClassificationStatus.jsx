import { RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

// The array of messages to cycle through
const thinkingMessages = [
  "Thinking, thinking... 🧠",
  "Zapping the data! ⚡",
  "Checking the clues! 🔎",
  "Looking for answers! 👀",
  "Sorting the stuff! 📦",
  "My brain is working! 🧠",
  "Gotta find the bin! 🗑️",
  "Processing the puzzle! 🧩",
  "Zooming and scanning! 🔍",
  "Thinking super-fast! 🚀",
  "Almost there, friend! 👀",
  "Finding the perfect match! 💚",
];

export const ClassificationStatus = ({ isClassifying }) => {
  // 1. State to track the current message index
  const [messageIndex, setMessageIndex] = useState(0);

  // 2. Effect to handle the cycling loop
  useEffect(() => {
    let intervalId;

    if (isClassifying) {
      // Set an interval to change the message every 1.5 seconds
      intervalId = setInterval(() => {
        // Cycle to the next message (looping back to 0 if it hits the end)
        setMessageIndex(
          (prevIndex) => (prevIndex + 1) % thinkingMessages.length
        );
      }, 1500); // Change the message every 1500ms (1.5 seconds)
    }

    // Cleanup function: important to clear the interval when the component unmounts
    // or when isClassifying changes to false.
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isClassifying]); // Only re-run this effect when isClassifying changes

  // 3. Render logic
  if (!isClassifying) {
    return null; // Don't render anything if classification is not happening
  }

  // Get the current message based on the rotating index
  const currentMessage = thinkingMessages[messageIndex];

  return (
    <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow-lg">
      {/* Lucide icon for spinning */}
      <RefreshCw className="w-8 h-8 text-blue-500 animate-spin mb-3" />

      {/* The dynamically changing message */}
      <p
        key={messageIndex} // Use key to force a quick re-render/fade for smoother transition
        className="text-blue-700 font-bold text-lg text-center h-8 transition-opacity duration-500 opacity-100"
      >
        {currentMessage}
      </p>

      {/* Added the original French translation for politeness */}
      <p className="text-sm text-blue-500 mt-1">Crushing the pixels !</p>
    </div>
  );
};
