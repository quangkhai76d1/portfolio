import {Input, Form} from 'antd';
import {useController, UseControllerProps} from 'react-hook-form';
import cx from 'classnames';

interface TextInputProps extends UseControllerProps {
  placeholder?: string;
  label?: string;
  type?: string;
  className?: string;
  required?: boolean;
}

const FormItem = Form.Item;

const TextInput: React.FC<TextInputProps> = ({
  name,
  control,
  defaultValue,
  rules,
  placeholder,
  label,
  type,
  className,
  required = true,
}) => {
  const {
    field,
    fieldState: {error},
  } = useController({name, control, defaultValue, rules});

  return (
    <FormItem
      label={label}
      help={error ? error.message : null}
      validateStatus={error ? 'error' : 'success'}
      className={className}
      required={required}>
      <Input {...field} placeholder={placeholder} type={type} className={cx(error && '!border-red-500')} />
    </FormItem>
  );
};

export default TextInput;
