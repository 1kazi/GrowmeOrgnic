import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { FormPage } from '../pages/form';
import { FormTable } from '../pages/form/FormTable';
export const Route: React.FC = () => {
    const router = createBrowserRouter([
  
        {
        path:'/',
        element:<FormPage/>
        },
        {
        path:'/form-data',
        element:<FormTable/>
        },

    ]
    );

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
