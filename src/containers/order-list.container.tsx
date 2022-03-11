import { apiHooks } from '@/api/api-hook';
import React from 'react';
import { Article } from '../components/article.component';
import { Loading } from '../components/loading.component';

export const OrderListContainer = (): JSX.Element => {
    const { data, isLoading } = apiHooks.orders.useGetOrders();

    return (
        <Loading isLoading={isLoading}>
            <>
                {data?.items?.map((item, index) => {
                    return (
                        <Article
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            content={item.content}
                            dateObj={item.dateObj}
                            showDivider={index + 1 !== data?.items?.length}
                        />
                    );
                })}
            </>
        </Loading>
    );
};
