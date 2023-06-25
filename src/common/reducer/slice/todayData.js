import React from 'react';


export const UPDATE_PROJECTS = 'UPDATE_PROJECTS';
export const updateProjects = projects => ({type: UPDATE_PROJECTS, projects});

const initialState = {
    projects: []
};
const update = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PROJECTS:
            return {
                ...state,
                projects: [...state, action.projects]
            };
        default:
            return state;
    }
}