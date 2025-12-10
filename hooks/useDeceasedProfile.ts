import { useState, useEffect } from 'react';
import { DeceasedProfile, Gender } from '../types';

export const useDeceasedProfile = () => {
  const [profile, setProfile] = useState<DeceasedProfile>(() => {
    const saved = localStorage.getItem('deceasedProfile');
    return saved ? JSON.parse(saved) : {
      name: '',
      deathDate: '',
      gender: Gender.MALE
    };
  });

  useEffect(() => {
    localStorage.setItem('deceasedProfile', JSON.stringify(profile));
  }, [profile]);

  return { profile, setProfile };
};
