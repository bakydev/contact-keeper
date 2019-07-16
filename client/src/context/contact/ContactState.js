import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import { 
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Ted Johnson',
                email: 'tjohnson@gmail.com',
                phone: '222-222-2222',
                type: 'professional',
            },
            {
                id: 2,
                name: 'Harry White',
                email: 'hwith@gmail.com',
                phone: '333-333-3333',
                type: 'personal',
            },
            {
                id: 3,
                name: 'Sara Smith',
                email: 'ssmith@gmail.com',
                phone: '111-111-1111',
                type: 'professional',
            },
            {
                id: 4,
                name: 'Melissa Williams',
                email: 'mwilliams@gmail.com',
                phone: '333-333-4444',
                type: 'personal',
            }
        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add contact


    // Delete contact


    // Set current contact


    // Clear current contact

    
    // Update contact


    // Filter contacts


    // Clear filter


    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;
