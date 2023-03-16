import { createSlice } from "@reduxjs/toolkit";
import { API } from "../../common/constants";
import server from "../../common/server";
import { updateValues } from "../../common/util";

const initialState = {
    personalRanking: {
        userPosition: 0,
        usersRanking: []
    },
    departmentsRank: {
        departmentPosition: 0,
        departmentsRanking: []
    }
}

export const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {
        loadPersonalRanking: (state, action) => {
            updateValues(state.personalRanking, action.payload);
        },
        loadDepartmentRanking: (state, action) => {
            updateValues(state.departmentsRank, action.payload);
        }
    },
  });

  export const { loadPersonalRanking, loadDepartmentRanking } = leaderboardSlice.actions;

  export const getPersonalRanking = () => async (dispatch) => {
    const res = await server.get(`${API.leaderboard}/personal_ranking`, { dispatch });
    if(res.status === 200){
        dispatch(loadPersonalRanking(res.data));
    }else{
        console.log('Error loading the leaderboard data', res);
    }
  }

  export const getDepartmentsRanking = () => async (dispatch) => {
    const res = await server.get(`${API.leaderboard}/departments_ranking`, { dispatch });
    if(res.status === 200){
        dispatch(loadDepartmentRanking(res.data));
    }else{
        console.log('Error loading the leaderboard data', res);
    }
  }

  export default leaderboardSlice.reducer;