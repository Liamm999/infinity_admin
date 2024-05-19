import { emailValidationRegex } from '@config';
import * as yup from 'yup';

export const UserInforSchema = yup.object().shape({
  userName: yup.string().trim().required('Không được bỏ trống trường này'),
  password: yup.string().trim().required('Không được bỏ trống trường này'),
  fullName: yup.string().trim().required('Không được bỏ trống trường này'),
  email: yup
    .string()
    .trim()
    .required('Trường này là bắt buộc')
    .email('emailInValid')
    .matches(emailValidationRegex, 'Email sai định dạng'),
  status: yup.string().trim(),
  authority: yup.string().trim(),
});
