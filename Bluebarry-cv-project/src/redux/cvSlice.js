import { createSlice } from '@reduxjs/toolkit';

const emptyExp = () => ({ position: '', employer: '', start: '', end: '', description: '' });
const emptyEdu = () => ({ school: '', degree: '', end: '', description: '' });

const initialState = {
  personal: { name: '', surname: '', image: '', about: '', email: '', phone: '' },
  experiences: [emptyExp()],
  education: [emptyEdu()],
};

const cvSlice = createSlice({
  name: 'cv',
  initialState,
  reducers: {
    setPersonal(state, action) { state.personal = { ...state.personal, ...action.payload }; },
    updateExperience(state, action) { const { i, k, v } = action.payload; state.experiences[i][k] = v; },
    addExperience(state) { state.experiences.push(emptyExp()); },
    updateEducation(state, action) { const { i, k, v } = action.payload; state.education[i][k] = v; },
    addEducation(state) { state.education.push(emptyEdu()); },
    resetCv() { return initialState; },
  },
});

export const { setPersonal, updateExperience, addExperience, updateEducation, addEducation, resetCv } = cvSlice.actions;
export default cvSlice.reducer;
