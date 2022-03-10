import axios from 'axios';
import qs from 'qs';
import { useQuery, UseQueryResult } from 'react-query';
import { createCollection, ICollection } from '../collection';
import { CONST } from '../const.contstants';
import { EPageId } from '../enum';
import { createPageDto, IPageDto } from '../model/page.dto';

//https://parus-smart.herokuapp.com/api/articles

//about filtering
//https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering
// Page, News, FAQ

const useGatPages = (): UseQueryResult<ICollection<IPageDto>> => {
    const query = qs.stringify(
        {
            sort: 'Date:desc',
        },
        {
            encodeValuesOnly: true,
        },
    );

    return useQuery<ICollection<IPageDto>>(`faq`, () =>
        axios.get(CONST.SERVER_URL + `api/pages?${query}`).then((r) => {
            const data = r.data.data.map((item: any) => createPageDto(item));
            return createCollection<IPageDto>(data);
        }),
    );
};

const useGetPageById = (id: EPageId | string): UseQueryResult<IPageDto> => {
    return useQuery<IPageDto>(`faq-by-id-${id}`, () =>
        axios.get(CONST.SERVER_URL + `api/pages/${id}`).then((r) => {
            const data = createPageDto(r.data.data);
            return data;
        }),
    );
};

export const page = {
    useGatPages,
    useGetPageById,
};
