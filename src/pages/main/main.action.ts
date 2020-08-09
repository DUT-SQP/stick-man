export interface IActionDisplayDialog {
  type: 'DISPAY_DIALOG';
  title: string;
  message: string;
}

export interface IActionHideDialog {
  type: 'HIDE_DIALOG';
}

export type IActionMainPage = IActionDisplayDialog | IActionHideDialog;
