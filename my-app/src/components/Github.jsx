import React, { useState, useEffect } from 'react';

function GithubProfile() {
  const [username, setUsername] = useState(''); // Default profile
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch GitHub profile data
  const fetchProfile = async (name) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${name}`);
      
      if (!response.ok) {
        throw new Error('User not found');
      }
      
      const data = await response.json();
      setProfile(data);
    } catch (err) {
      setError(err.message);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

  // Run the fetch once when the component initially mounts
  useEffect(() => {
    fetchProfile(username);
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchProfile(username);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>GitHub Profile Finder</h2>
      
      {/* Search Input Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '8px', width: '70%', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '8px 12px' }}>Search</button>
      </form>

      {/* Conditional Rendering UI */}
      {loading ? <p>Loading data...</p>:<p>no loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      {profile && !loading && (
        <div style={{ marginTop: '20px', textAlign: 'center', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
          <img 
            src={profile.avatar_url} 
            alt={profile.name} 
            style={{ width: '150px', borderRadius: '50%' }} 
          />
          <h3>{profile.name || profile.login}</h3>
          <p>{profile.bio || 'No bio available'}</p>
          <p><strong>Followers:</strong> {profile.followers} | <strong>Following:</strong> {profile.following}</p>
          <p><strong>Public Repos:</strong> {profile.public_repos}</p>
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default GithubProfile;