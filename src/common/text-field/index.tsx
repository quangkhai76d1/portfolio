import {HTMLInputTypeAttribute} from 'react';
import {useFormContext} from 'react-hook-form';
import ErrorMessage from '../error-message';

export interface ITextFieldProps {
  label?: string;
  name: string;
  autoComplete?: string;
  readOnly?: boolean;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  showError?: boolean;
}

export default function TextField({
  placeholder,
  showError = true,
  readOnly,
  autoComplete,
  name,
  label,
  type = 'text',
}: ITextFieldProps) {
  const {
    register,
    formState: {errors},
  } = useFormContext();
  return (
    <div className="flex flex-col w-full gap-1 text-base font-medium max-w-[37.5rem]">
      {label && (
        <label className="text-sm text-white md:text-base" htmlFor={name}>
          {label}
        </label>
      )}

      {name === 'message' ? (
        <textarea
          cols={50}
          rows={4}
          {...register(name)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="px-2 py-3 rounded-lg outline-none bg-slate-300"
        />
      ) : (
        <input
          autoComplete={autoComplete}
          readOnly={readOnly}
          placeholder={placeholder}
          id={name}
          type={type}
          {...register(name)}
          className="px-2 py-3 rounded-lg outline-none bg-slate-300"
        />
      )}

      <ErrorMessage showError={showError && !!errors[name]} message={`${errors[name]?.message}`} />
    </div>
  );
}
