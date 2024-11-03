import React from 'react';
import ReactDOM from 'react-dom';
import FollowButton from '../src/Button';
import automateFollowing from '../src/followUsers';

function injectButton() {
  console.log('Content script active'); 

  const app = document.createElement('div');
  document.body.appendChild(app);

  const handleFollowAll = async () => {
    console.log("Follow All button in content script clicked"); 
    await automateFollowing();
  };

  ReactDOM.render(<FollowButton onClick={handleFollowAll} />, app);
}

setTimeout(injectButton, 2000); 
