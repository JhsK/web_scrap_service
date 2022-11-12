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

export type Directory = Array<DirecotryObjState>;

export interface RootRenamePayload {
  index: number;
  name: string;
}
export interface RootRemovePayload {
  index: number;
}

export interface subAddPayload {
  data: SubDirectoryObj;
  index: number;
}

export interface SubRenamePayload {
  rootIndex: number;
  name: string;
  subIndex: number;
}
export interface SubRemovePayload {
  rootIndex: number;
  subIndex: number;
}

export interface PostAddPayload {
  rootIndex: number;
  subIndex: number;
  post: string;
}

export interface RemoveUrlCardPayload {
  rootIndex: number;
  subIndex: number;
  postIndex: number;
}
