import { forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IProps extends UseFormRegisterReturn {
    name: string;
    label: string;
    placeholder?: string;
    type?: string;
}
export const Input = forwardRef(({ name, label, type, placeholder, ...rest }: IProps, ref): JSX.Element => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                className={type === 'file' ? 'form-control-file' : 'form-control'}
                id={name}
                name={name}
                placeholder={placeholder}
                {...rest}
                ref={ref as any}
            />
        </div>
    );
});
