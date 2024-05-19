import { phoneRegExp } from '@config';
import * as yup from 'yup';

export const FormCustomerSchema = yup.object().shape({
  callId: yup.string().trim().required('Không được bỏ trống trường này'),
  cusId: yup.string().trim(),
  staId: yup.string().trim(),
  cusName: yup.string().required('Không được bỏ trống trường này'),
  datatype: yup.string().trim().required('Không được bỏ trống trường này'),
  phoneNumber: yup
    .string()
    .trim()
    .required('Không được bỏ trống trường này')
    .matches(phoneRegExp, 'Sai định dạng'),
});
