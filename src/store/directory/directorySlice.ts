import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DirecotryObjState {
  id: string;
  type: 'root';
  name: string;
  subDirectory?: {
    type: 'sub';
    name: string;
  };
}

type Directory = Array<DirecotryObjState>;

const initialState: Directory = [
  {
    id: '1',
    type: 'root',
    name: '루트 기본',
  },
];

export const directorySlice = createSlice({
  name: 'directory',
  initialState,
  reducers: {
    rootAdd: (state, action: PayloadAction<DirecotryObjState>) => {
      state.push(action.payload);
    },

    rootRename: (state, action: PayloadAction<{ index: number; name: string }>) => {
      state[action.payload.index].name = action.payload.name;
    },
  },
});

export const { rootAdd, rootRename } = directorySlice.actions;
export const selectDirectory = (state: Directory) => state;
export default directorySlice.reducer;
