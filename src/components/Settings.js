import React, { useState } from 'react';
import "./settings.css";
function SettingsPage() {
  const [username, setUsername] = useState(''); // Store the current username
  const [password, setPassword] = useState(''); // Store the current password
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Store the current background color

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  const handleSaveSettings = () => {
    // Save the updated username, password, and background color to the server
    // using an API call or other method
    // You can also display a success message to the user if the save was successful
  };

  return (
    <div>
      <h2>Settings</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <label>
        Chat Screen Background Color:
        <input type="color" value={backgroundColor} onChange={handleBackgroundColorChange} />
      </label>
      <button onClick={handleSaveSettings}>Save Settings</button>
    </div>
  );
}

export default SettingsPage;
