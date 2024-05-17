import { phoneRegExp } from '@config';
import * as yup from 'yup';

export const FormCallSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .trim()
    .required('Không được bỏ trống trường này')
    .matches(phoneRegExp, 'Sai định dạng'),
  callDate: yup.string().trim().required('Không được bỏ trống trường này'),
  callDescription: yup
    .string()
    .trim()
    .required('Không được bỏ trống trường này'),
  callDuration: yup.string().required('Không được bỏ trống trường này'),
  callStart: yup.string().trim().required('Không được bỏ trống trường này'),
  callEnd: yup.string().trim().required('Không được bỏ trống trường này'),
  callRecord: yup.string().trim().required('Không được bỏ trống trường này'),
  statusId: yup.number(),
  // userId: yup.number().required('Không được bỏ trống trường này'),
  // auId: yup.number().nullable(),
});
