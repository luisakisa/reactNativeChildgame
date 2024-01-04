// @ts-ignore
import {createSlice, nanoid, PayloadAction} from '@reduxjs/toolkit';
import { ThemeName } from 'view/themes';

export interface UserProperties {
  uuid: string;
  level: number;
  age: number | undefined;
  name: string | undefined;
  theme: ThemeName;
}

const initialState: UserProperties = {
  uuid: nanoid(),
  level: 1,
  age: undefined,
  name: undefined,
  theme: ThemeName.light,
} as UserProperties;

export const userProperties = createSlice({
  name: 'userProperties',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Partial<UserProperties>>) => {
      Object.assign(state, action.payload);
    },
    completeLevel: state => {
      state.level++;
    },
    downgradeLevel: state => {
      state.level--;
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateAge: (state, action) => {
      state.age = action.payload;
    },
  },
});
