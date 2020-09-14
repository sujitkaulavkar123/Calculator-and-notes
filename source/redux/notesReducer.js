import { ADD_NOTE, FILTER_NOTE } from "./action";

const initialState = {
    notes: [],
    filterNotes: [],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE: 
      return { ...state, filterNotes:[...state.notes, action.note], notes: [...state.notes, action.note]};

      case FILTER_NOTE: 
      const type = action.filterBy;
      if (type == 'Active') {
        return {...state, filterNotes: state.notes.filter(note => note.status === "Active")}
      }
      else if (type == 'Completed') {
        return {...state, filterNotes: state.notes.filter(note => note.status === "Completed")}
      }
        return {...state, filterNotes: state.notes}
      
    default:
      return state;
  }
};

export default notesReducer;

export const submitNote = (note) => {
  return { type: ADD_NOTE, note };
};

export const filterNotes = (filterBy) => {
  return { type: FILTER_NOTE, filterBy };
};
