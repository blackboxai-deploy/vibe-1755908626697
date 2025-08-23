import React, { useState, useEffect } from 'react';
import { getUserData } from '../utils/api';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const userData = await getUserData(userId);
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  const handleUpdateProfile = async (updatedData) => {
    try {
      const response = await updateUserProfile(userId, updatedData);
      setUser(response.data);
      showNotification('Profile updated successfully!');
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  if (loading) return <div className="loading-spinner">Loading...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={user.avatar} alt={user.name} className="avatar" />
        <h2>{user.name}</h2>
        <p className="email">{user.email}</p>
      </div>
      
      <div className="profile-details">
        <div className="detail-item">
          <label>Phone:</label>
          <span>{user.phone}</span>
        </div>
        <div className="detail-item">
          <label>Department:</label>
          <span>{user.department}</span>
        </div>
        <div className="detail-item">
          <label>Join Date:</label>
          <span>{formatDate(user.joinDate)}</span>
        </div>
        <div className="detail-item">
          <label>Status:</label>
          <span className={`status ${user.status.toLowerCase()}`}>
            {user.status}
          </span>
        </div>
      </div>

      <div className="profile-actions">
        <button 
          onClick={() => handleUpdateProfile({ status: 'active' })}
          className="btn-primary"
        >
          Update Profile
        </button>
        <button 
          onClick={() => exportUserData(user)}
          className="btn-secondary"
        >
          Export Data
        </button>
      </div>
    </div>
  );
};

export default UserProfile;