import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import { createCollection, ICollection } from '../../shared/collection';
import { CONST } from '../../shared/const.contstants';
import { createArticleDto, IArticleDto } from '../model/article.dto';

// post order {"status":"waiting","request":2}
const useGetOrders = (): UseQueryResult<ICollection<IArticleDto>> => {
    return useQuery<ICollection<IArticleDto>>(`orders-list`, () =>
        axios.get(CONST.SERVER_URL + `api/orders`).then((r) => {
            const data = r.data.data.map((item: any) => createArticleDto(item));
            return createCollection<IArticleDto>(data);
        }),
    );
};

export const orders = {
    useGetOrders,
};
