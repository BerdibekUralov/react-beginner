import React from 'react';
import './index.scss';

function App() {
  const [visible, setVisible] = React.useState(false)

  const handleVisible = () => {
    setVisible(!visible)
  }
  return (
    <div className="App">
      <button className="open-modal-btn" onClick={handleVisible}>✨ Открыть окно</button>
      {visible && 
        <div className="overlay">
          <div className="modal">
            <svg height="200" viewBox="0 0 200 200" width="200" onClick={handleVisible}>
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt='' />
          </div>
        </div>
      }
    </div>
  );
}

export default App;