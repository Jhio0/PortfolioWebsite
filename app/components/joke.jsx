import { useEffect, useState } from "react";
import "./joke.css";

const Joke = ({ url }) => {
  const [text, setText] = useState("Please hire me");
  const [clicked, setClicked] = useState(false);

  const getJoke = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        setText("Error in response. Try again later");
        return;
      }
  
      const data = await response.json();
      const jokeText = data.attachments[0]?.text || "No joke available";
      setText(jokeText);
    } catch (error) {
      console.error(error);
      setText("Error in connection. Try again later");
    }
  };

  const handleClick = () => {
    if (!clicked) {
      // On first click, set text to "Please hire me"
      setText("Please hire me <hr style={{ borderColor: 'black' }}/> Press again to get an actual Joke <hr/> &#128512; &#128512; &#128512;</span>");
    } else {
      // On subsequent clicks, fetch a joke
      getJoke(url);
    }
    setClicked(true);
  };

  return (
    <div className="joke">
      <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1020px] mx-auto flex flex-col justify-center h-full'>
            <h2 className='py-4'>Joke of the Day</h2>

            {/* Conditionally render text only when the button has been clicked */}
            {clicked && <div dangerouslySetInnerHTML={{ __html: text }}></div>}
            {/* Render button only if it hasn't been clicked */}
            <button onClick={handleClick}>Next Joke</button>
               
            </div>
        </div>
    </div>
  );
};

export default Joke;