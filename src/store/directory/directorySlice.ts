import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DirecotryObjState {
  id: string;
  type: 'root';
  name: string;
  subDirectory: SubDirectoryObj[];
}

export interface SubDirectoryObj {
  id: string;
  type: 'sub';
  name: string;
}

type Directory = Array<DirecotryObjState>;

const initialState: Directory = [
  {
    id: '1',
    type: 'root',
    name: '루트 기본',
    subDirectory: [],
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

    subAdd: (state, action: PayloadAction<{ data: SubDirectoryObj; index: number }>) => {
      state[action.payload.index].subDirectory?.push(action.payload.data);
    },

    subRename: (
      state,
      action: PayloadAction<{ rootIndex: number; name: string; subIndex: number }>
    ) => {
      state[action.payload.rootIndex].subDirectory[action.payload.subIndex].name =
        action.payload.name;
    },
  },
});

export const { rootAdd, rootRename, subAdd, subRename } = directorySlice.actions;
export const selectDirectory = (state: Directory) => state;
export default directorySlice.reducer;
