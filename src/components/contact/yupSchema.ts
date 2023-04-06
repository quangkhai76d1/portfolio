import * as yup from 'yup';

export const nameSchema = yup
  .string()
  .required('Name is a required field')
  .min(3, 'Name must be between 3 (min) and 63 (max) characters long.')
  .max(63, 'Name must be between 3 (min) and 63 (max) characters long.');

export const messageSchema = yup
  .string()
  .required('Message is a required field')
  .min(3, 'Message must be between 3 (min) and 63 (max) characters long.')
  .max(63, 'Message must be between 3 (min) and 63 (max) characters long.');

export const emailSchema = yup.string().email('Email must be a valid email').required('Email is a required field');
