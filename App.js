import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomStack from './src/stacks/BottomStack';

// ios not building in release mode
// https://onexlab-io.medium.com/main-jsbundle-does-not-exist-fixed-7d92f466ba5a

import { Provider as AppProvider } from './src/context/AppContext';

const App = () => {
    return (
        <AppProvider>
            <NavigationContainer>
                <BottomStack />
            </NavigationContainer>
        </AppProvider>
    );
};

export default App;