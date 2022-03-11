import axios from 'axios';
import qs from 'qs';
import { useQuery, UseQueryResult } from 'react-query';
import { createCollection, ICollection } from '../../shared/collection';
import { CONST } from '../../shared/const.contstants';
import { createArticleDto, IArticleDto } from '../model/article.dto';

const useGetVolunteers = (): UseQueryResult<ICollection<IArticleDto>> => {
  
    return useQuery<ICollection<IArticleDto>>(`volunteer-list`, () =>
        axios.get(CONST.SERVER_URL + `api/volunteers`).then((r) => {
            const data = r.data.data.map((item: any) => createArticleDto(item));
            return createCollection<IArticleDto>(data);
        }),
    );
};

export const volunteers = {
     useGetVolunteers,
};
