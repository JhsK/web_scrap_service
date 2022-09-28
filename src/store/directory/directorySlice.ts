import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DirecotryObjState {
  id: string;
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
      id: '1',
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

    rootRename: (state, action: PayloadAction<{ id: string; name: string }>) => {
      state.directoryList.forEach((list) => {
        if (list.id === action.payload.id) {
          list.name = action.payload.name;
        }
      });
    },
  },
});

export const { rootAdd, rootRename } = directorySlice.actions;
export const selectDirectory = (state: DirectoryList) => state;
export default directorySlice.reducer;
