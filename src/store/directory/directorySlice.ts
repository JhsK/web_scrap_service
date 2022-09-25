import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DirecotryObjState {
  type: 'root';
  name: string;
  subBasic?: {
    type: 'sub';
    name: string;
  };
}

// export interface DirectoryState {
//   [key: string]: DirecotryObjState;
// }

export interface DirectoryList {
  directoryList: Array<DirecotryObjState>;
}

const initialState: DirectoryList = {
  directoryList: [
    {
      type: 'root',
      name: '루트 기본',
    },
  ],
};

export const directorySlice = createSlice({
  name: 'directory',
  initialState,
  reducers: {
    rootAdd: (state, action: PayloadAction<DirecotryObjState>) => {
      state.directoryList.push(action.payload);
    },
  },
});

export const { rootAdd } = directorySlice.actions;
export const selectDirectory = (state: DirectoryList) => state;
export default directorySlice.reducer;
