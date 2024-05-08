import { EDataType } from '@config';

export function getDataTypeColor(dataType: EDataType) {
  if (dataType === EDataType.HOT) {
    return '#FF0000';
  } else if (dataType === EDataType.COLD) {
    return '#00B2FF';
  }
}
