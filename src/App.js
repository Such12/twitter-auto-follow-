import React from 'react';
import FollowButton from './Button';
import automateFollowing from './followUsers';

function App() {
  const handleFollowAll = async () => {
    console.log("Follow All button clicked");
    await automateFollowing();
  };

  return (
    <div className="App">
      <FollowButton onClick={handleFollowAll} />
    </div>
  );
}

export default App;
