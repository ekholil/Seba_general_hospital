import React, { createContext } from 'react';
import Usefirebase from '../Hooks/useFirebase';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const allContexts = Usefirebase()
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;