export type IStsEvent = {
  eventid: number;
  eventTitle: string;
  eventDateTime: number;
};

export interface IResponse {
  code: number;
  isSuccess: boolean;
  message: string;
}
