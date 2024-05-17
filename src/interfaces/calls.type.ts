export interface ICall {
  auId: number;
  callDate: string;
  callId: number;
  description: string;
  duration: string;
  end: string;
  phoneNumber: string;
  record: string;
  staId: number;
  start: string;
  stt: number;
  userId: number;
}

export type ICreateCallRequest = Partial<ICall>;
