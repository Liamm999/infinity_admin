export enum ECallStatus {
  'Chưa gọi' = 1,
  'Gọi nhỡ' = 2,
  'Đã gọi' = 3,
}

export enum ECallStautsColor {
  '#FFC121' = 1,
  '#FF20C1' = 2,
  '#3DFF39' = 3,
}

export function getCallStatus(statusId: number) {
  return {
    status: ECallStatus[statusId],
    color: ECallStautsColor[statusId],
  };
}
