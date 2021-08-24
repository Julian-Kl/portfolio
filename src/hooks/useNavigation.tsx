import React, { useState } from 'react';
import { Switch, Route, useLocation, Redirect } from "react-router-dom";

export function useNavigation(target: string) {

    const [redirect, setRedirect] = useState<boolean>(false);
    const [location, setLocation] = useState<object | null>();

    setLocation(useLocation());
    
    console.log(location);

    return(0);
}