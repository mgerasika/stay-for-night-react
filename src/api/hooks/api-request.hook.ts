import axios from 'axios';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from 'react-query';
import { createCollection, ICollection } from '../../shared/collection';
import { CONST } from '../../shared/const.contstants';
import { createArticleDto, IArticleDto } from '../model/article.dto';

export interface IRequestDto {
    city: string;
    fullName: string;
    phoneNumber: number;
    email: string;
    description: string;
    identity?: string;
}

// upload https://stay-for-night-strapi.herokuapp.com/upload
//{"city":"Lviv","fullName":"Mykhaylo","phoneNumber":"1213123","email":"mgerasika@gmail.com","description":"test"}
const useGetRequestList = (): UseQueryResult<ICollection<IArticleDto>> => {
    return useQuery<ICollection<IArticleDto>>(`requests-list`, () =>
        axios.get(CONST.SERVER_URL + `api/articles`).then((r) => {
            const data = r.data.data.map((item: any) => createArticleDto(item));
            return createCollection<IArticleDto>(data);
        }),
    );
};

const useAddRequest = (): UseMutationResult<any, any, IRequestDto> => {
    return useMutation(`add-request`, (props) =>
        axios.post(CONST.SERVER_URL + `api/articles`, {
            data: props,
        }),
    );
};

const useUploadFile = (): UseMutationResult<any, any, File> => {
    return useMutation(`upload`, (props) => {
        var formData = new FormData();
        formData.append('files', props);
        return axios.post(CONST.SERVER_URL + `api/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    });
};

export const requests = {
    useUploadFile,
    useAddRequest,
    useGetRequestList,
};
