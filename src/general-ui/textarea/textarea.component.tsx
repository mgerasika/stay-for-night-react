import { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IProps extends UseFormRegisterReturn {
    name: string;
    label: string;
    placeholder?: string;
}
export const TextArea = forwardRef(({ name, label, placeholder, ...rest }: IProps, ref): JSX.Element => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <textarea className="form-control" id={name} placeholder={placeholder} name={name} {...rest} ref={ref as any} />
        </div>
    );
});
