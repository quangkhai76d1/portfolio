/* eslint-disable @typescript-eslint/no-explicit-any */
import {Form, Input} from 'antd'
import {useController} from 'react-hook-form'
import cx from 'classnames'

interface PasswordInputProps {
    name: string
    control: any
    defaultValue?: string
    placeholder?: string
    label?: string
    className?: string
    required?: boolean
    rules?: any
}

const FormItem = Form.Item

const PasswordInput: React.FC<PasswordInputProps> = ({
    name,
    control,
    defaultValue,
    rules,
    placeholder,
    label,
    className,
    required = true
}) => {
    const {
        field,
        fieldState: {error}
    } = useController({name, control, defaultValue, rules})

    return (
        <FormItem
            label={label}
            help={error ? error.message : null}
            validateStatus={error ? 'error' : 'success'}
            className={className}
            required={required}
        >
            <Input.Password
                {...field}
                placeholder={placeholder}
                className={cx(error && '!border-red-500')}
            />
        </FormItem>
    )
}

export default PasswordInput
