import React from 'react';

export const ExtraContext = React.createContext({
    theme: 'light',
    changeTheme: () => {}
})