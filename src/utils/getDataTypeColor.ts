import { EDataType } from '@config';

export function getDataTypeColor(dataType: EDataType) {
  if (String(dataType).toLowerCase() === String(EDataType.HOT).toLowerCase()) {
    return '#FF0000';
  } else if (
    String(dataType).toLowerCase() === String(EDataType.COLD).toLowerCase()
  ) {
    return '#00B2FF';
  }
}
