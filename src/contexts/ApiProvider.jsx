import React from 'react';
import { AuthProvider } from './AuthContext';
import { CharacterProvider } from './CharacterContext';
import { GameProvider } from './GameContext';

const ApiProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CharacterProvider>
        <GameProvider>
          {children}
        </GameProvider>
      </CharacterProvider>
    </AuthProvider>
  );
};

export default ApiProvider;