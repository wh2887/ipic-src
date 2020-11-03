import React, {createContext, useContext} from 'react'


const Context = createContext({})


export const useStores = () => useContext(Context)