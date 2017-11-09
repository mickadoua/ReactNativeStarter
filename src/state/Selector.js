import {createSelector} from 'reselect'

const getSelectIndex = (state) => state.selectedProject; //example...
const getProjects = (state) => state.projects;//example...

export const getSelectedProject = createSelector(
    [ getProjects, getSelectIndex ],
    (projects, index) => {
        return projects[index];
    }
);


