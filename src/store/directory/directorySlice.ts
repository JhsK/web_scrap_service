import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { number, string } from 'prop-types';

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
  posts: string[];
}

type Directory = Array<DirecotryObjState>;

const initialState: () => Directory = () => {
  const savedDirectory = localStorage.getItem('directory');
  if (savedDirectory) {
    return JSON.parse(savedDirectory);
  }
  return [
    {
      id: '1',
      type: 'root',
      name: '루트 기본',
      subDirectory: [],
    },
  ];
};

console.log(initialState());

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

    postAdd: (
      state,
      action: PayloadAction<{ rootIndex: number; subIndex: number; post: string }>
    ) => {
      state[action.payload.rootIndex].subDirectory[action.payload.subIndex].posts.push(
        action.payload.post
      );
    },
  },
});

export const { rootAdd, rootRename, subAdd, subRename, postAdd } = directorySlice.actions;
export const selectDirectory = (state: Directory) => state;
export default directorySlice.reducer;
