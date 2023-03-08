import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../common/constants";
import server from "../../common/server";
import { updateValues } from "../../common/util";

const initialState = {
    userSection: {
        name: 'Username',
        department: 'Department',
        organization: 'Organization',
        monthPoints: 0,
        rankingPos: 0,
    },
    actionsLogged: [],
    progressData: {
        personalProgress: [],
        departmentProgress: []
    },
    orgActions: {
        orgActions: 0
    }
}

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        loadUserSection: (state, action) => {
            updateValues(state.userSection, action.payload);
        },
        loadActionsLogged: (state, action) => {
            updateValues(state.actionsLogged, action.payload);
        },
        loadProgressData: (state, action) => {
            updateValues(state.progressData, action.payload);
        },
        loadOrgActions: (state, action) => {
            updateValues(state.orgActions, action.payload);
        }
    },
  });

  export const { loadUserSection, loadActionsLogged, loadProgressData, loadOrgActions } = dashboardSlice.actions;

  export const getUserSection = () => async (dispatch) => {
    const res = await server.get(`${API.dashboard}/user`, { dispatch });
    if(res.status === 200){
        dispatch(loadUserSection(res.data));
    }
  }

  export const getProgressData = () => async (dispatch) => {
    const res = await server.get(`${API.dashboard}/progress`, { dispatch });
    if(res.status === 200){
        dispatch(loadProgressData(res.data));
    }
  }

  export const getOrgActions = () => async (dispatch) => {
    const res = await server.get(`${API.dashboard}/org-actions`, { dispatch });
    if(res.status === 200){
        dispatch(loadOrgActions(res.data));
    }
  }

  export const getActionsDone = () => async (dispatch) => {
    const res = await server.get(`${API.actions}/user`, { dispatch });
    if(res.status === 200){
        dispatch(loadActionsLogged(res.data));
    }
  }

  export default dashboardSlice.reducer;