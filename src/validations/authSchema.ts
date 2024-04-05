import * as yup from 'yup';

import {
  emailValidationRegex,
  onlyTextRegex,
  strongPasswordValidationRegex,
} from '@config';

export const LoginSchema = yup.object().shape({
  username: yup.string().trim().required('Tên người dùng không được bỏ trống'),
  password: yup.string().trim().required('Mật khẩu không được bỏ trống'),
});

export const RegisterSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('firstNameRequired')
    .max(50, 'maxCharacters')
    .matches(onlyTextRegex, 'onlyHaveText'),
  email: yup
    .string()
    .trim()
    .required('emailRequired')
    .email('emailInValid')
    .matches(emailValidationRegex, 'emailInValid'),
  password: yup
    .string()
    .trim()
    .required('passwordRequired')
    .min(8, 'passwordLengthInvalid')
    .max(32, 'passwordLengthInvalid'),
  // .matches(strongPasswordValidationRegex, 'passwordFormatInvalid'),
  confirmPassword: yup
    .string()
    .required('confirmPasswordIsRequired')
    .oneOf([yup.ref('password')], 'confirmPasswordNotMatch'),
});

export const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required('emailRequired')
    .email('emailInValid')
    .matches(emailValidationRegex, 'emailInValid'),
});

export const ResetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .trim()
    .required('passwordRequired')
    .min(8, 'passwordLengthInvalid')
    .max(32, 'passwordLengthInvalid'),
  // .matches(strongPasswordValidationRegex, 'passwordFormatInvalid'),
  confirmPassword: yup
    .string()
    .required('confirmPasswordIsRequired')
    .oneOf([yup.ref('password')], 'confirmPasswordNotMatch'),
});

export const OTPSchema = yup.object().shape({
  otp: yup
    .string()
    .trim()
    .required('otpRequired')
    .min(6, 'otpLengthInvalid')
    .max(6, 'otpLengthInvalid'),
});

// export const ChangePasswordSchema = yup.object().shape({
//   oldPassword: yup.string().trim().required('Old password is required'),
//   password: yup
//     .string()
//     .trim()
//     .required('passwordRequired')
//     .min(8, 'passwordLengthInvalid')
//     .max(32, 'passwordLengthInvalid')
//     .matches(
//       strongPasswordValidationRegex,
//       'Password should include numbers, uppercase, lowercase letters and at least one special character'
//     ),
//   confirmPassword: yup
//     .string()
//     .required('confirmPasswordIsRequired')
//     .oneOf([yup.ref('password')], 'confirmPasswordNotMatch'),
// })

export const ChangePasswordSchema = yup.object().shape(
  {
    oldPassword: yup
      .string()
      .trim()
      .nullable()
      .notRequired()
      .when('password', {
        is: (value: any) => value?.length,
        then: rule => rule.required('oldPasswordIsRequired'),
      }),
    password: yup
      .string()
      .trim()
      .when('oldPassword', {
        is: (value: any) => value?.length,
        then: rule =>
          rule
            .required('passwordRequired')
            .min(8, 'passwordLengthInvalid')
            .max(32, 'passwordLengthInvalid')
            .matches(strongPasswordValidationRegex, 'passwordFormatInvalid'),
      })
      .when('confirmPassword', {
        is: (value: any) => value?.length,
        then: rule => rule.required('passwordRequired'),
      }),
    confirmPassword: yup
      .string()
      .nullable()
      .notRequired()
      .when('password', {
        is: (value: any) => value?.length,
        then: rule =>
          rule
            .required('confirmPasswordIsRequired')
            .oneOf([yup.ref('password')], 'confirmPasswordNotMatch'),
      }),
  },
  [
    ['oldPassword', 'password'],
    ['password', 'confirmPassword'],
  ],
);
