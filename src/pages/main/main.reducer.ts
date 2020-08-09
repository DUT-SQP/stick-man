import { IActionMainPage } from './main.action';
export interface IStateMainPage {
  dialog: {
    isVisible: boolean;
    title: string;
    message: string;
  };
}

const initialState: IStateMainPage = {
  dialog: {
    isVisible: false,
    title: '',
    message: '',
  },
};

export const mainPageReducer = (
  state = initialState,
  action: IActionMainPage
): IStateMainPage => {
  switch (action.type) {
    case 'DISPAY_DIALOG':
      return {
        ...state,
        dialog: {
          isVisible: true,
          title: action.title,
          message: action.message,
        },
      };
    case 'HIDE_DIALOG':
      return {
        ...state,
        dialog: {
          isVisible: false,
          title: '',
          message: '',
        },
      };
    default:
      return state;
  }
};

export type StoreMainPageReducer = ReturnType<typeof mainPageReducer>;
