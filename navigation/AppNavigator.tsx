import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { RootState } from '../store';
import AuthNavigation from './AuthNavigation';
import DashboardNavigation from './DashboardNavigation';

const AppNavigator = () => {
  const IsAuthenticated = useSelector((state: RootState) => state.appState.isAuthenticated);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(IsAuthenticated);
  }, [IsAuthenticated])
  return (
    <NavigationContainer>
      {
        isAuthenticated ? 
        <DashboardNavigation /> : 
        <AuthNavigation />
      }
    </NavigationContainer>
  )
}

export default AppNavigator;