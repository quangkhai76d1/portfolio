import {Form, Input} from 'antd';
import cx from 'classnames';
import {useController} from 'react-hook-form';

interface TextAreaProps {
  name: string;
  control: any;
  defaultValue?: string;
  rules?: any;
  placeholder?: string;
  label?: string;
  className?: string;
  rows?: number;
}

const FormItem = Form.Item;

const TextAreaInput: React.FC<TextAreaProps> = ({name, control, defaultValue, rules, placeholder, label, className, rows}) => {
  const {
    field,
    fieldState: {error},
  } = useController({name, control, defaultValue, rules});

  return (
    <FormItem
      label={label}
      help={error ? error.message : null}
      validateStatus={error ? 'error' : 'success'}
      className={className}>
      <Input.TextArea {...field} rows={rows} placeholder={placeholder} className={cx(error && '!border-red-500')} />
    </FormItem>
  );
};

export default TextAreaInput;
