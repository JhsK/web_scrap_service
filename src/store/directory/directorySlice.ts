import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  DirecotryObjState,
  Directory,
  PostAddPayload,
  RemoveUrlCardPayload,
  RootRemovePayload,
  RootRenamePayload,
  subAddPayload,
  SubRemovePayload,
  SubRenamePayload,
} from './type';

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

export const directorySlice = createSlice({
  name: 'directory',
  initialState,
  reducers: {
    rootAdd: (state, action: PayloadAction<DirecotryObjState>) => {
      state.push(action.payload);
    },

    rootRename: (state, action: PayloadAction<RootRenamePayload>) => {
      state[action.payload.index].name = action.payload.name;
    },

    rootRemove: (state, action: PayloadAction<RootRemovePayload>) => {
      state.splice(action.payload.index);
    },

    subAdd: (state, action: PayloadAction<subAddPayload>) => {
      state[action.payload.index].subDirectory?.push(action.payload.data);
    },

    subRename: (state, action: PayloadAction<SubRenamePayload>) => {
      state[action.payload.rootIndex].subDirectory[action.payload.subIndex].name =
        action.payload.name;
    },

    subRemove: (state, action: PayloadAction<SubRemovePayload>) => {
      const { rootIndex, subIndex } = action.payload;
      state[rootIndex].subDirectory.splice(subIndex);
    },

    postAdd: (state, action: PayloadAction<PostAddPayload>) => {
      state[action.payload.rootIndex].subDirectory[action.payload.subIndex].posts.push(
        action.payload.post
      );
    },

    removeUrlCard: (state, action: PayloadAction<RemoveUrlCardPayload>) => {
      const { rootIndex, postIndex, subIndex } = action.payload;

      state[rootIndex].subDirectory[subIndex].posts.splice(postIndex, 1);
    },
  },
});

export const {
  rootAdd,
  rootRename,
  subAdd,
  subRename,
  subRemove,
  postAdd,
  removeUrlCard,
  rootRemove,
} = directorySlice.actions;
export const selectDirectory = (state: Directory) => state;
export default directorySlice.reducer;
