import { apiHooks } from '@/api/api-hook';
import { Input } from '@/general-ui/input/input.component';
import { TextArea } from '@/general-ui/textarea/textarea.component';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import 'twin.macro';

export const RequestAddFormContainer = (): JSX.Element => {
    const { mutate: mutateAddRequest, data: addResult, reset: resetAddRequest } = apiHooks.requests.useAddRequest();
    const { mutate: mutateUploadFile, data: uploadResult, reset: resetUploadRequest } = apiHooks.requests.useUploadFile();

    const { register, handleSubmit, formState, getValues, reset } = useForm({
        defaultValues: {
            city: '',
            fullName: '',
            phoneNumber: 380,
            email: '',
            description: '',
            picture: '',
        },
    });
    const onSubmit = (data: any) => {
        console.log('before Add', data);
        mutateUploadFile(data.picture[0]);
    };

    useEffect(() => {
        if (uploadResult) {
            const values = getValues();
            mutateAddRequest({
                city: values.city,
                fullName: values.fullName,
                phoneNumber: values.phoneNumber,
                email: values.email,
                description: values.description,
                identity: uploadResult.data && uploadResult.data[0] ? uploadResult.data[0].id : '',
            });
        }
    }, [uploadResult]);

    return addResult ? (
        <div tw="pb-4">
            <p>Ваша заявка успішно відправленна!</p>
            <button
                className="btn btn-primary "
                onClick={() => {
                    resetAddRequest();
                    resetUploadRequest();
                }}
            >
                Відправити ще одну
            </button>
        </div>
    ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div tw="grid grid-row-gap[16px] pb-4">
                <Input {...register('fullName')} label="Призвіще та імя" />
                <Input {...register('city')} label="Місто" />
                <Input {...register('phoneNumber')} label="Телефон" />
                <Input {...register('email')} label="Електронна пошта" />
                <Input type="file" {...register('picture')} label="Документи (копія паспорту 1 сторінки)" />
                <TextArea {...register('description')} label="Інші деталі (скільки вас, на скільки днів)" />

                <button type="submit" className="btn btn-primary ">
                    Залишити заявку
                </button>
            </div>
        </form>
    );
};
