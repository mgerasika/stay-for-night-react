import { apiHooks } from '@/api/api-hook';
import React from 'react';
import { Article } from '../components/article.component';
import { Loading } from '../components/loading.component';

export const FaqListContainer = (): JSX.Element => {
    const { data, isLoading } = apiHooks.faq.useGetFaqList();

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
                            dateObj={undefined}
                            showDivider={index + 1 !== data?.items?.length}
                        />
                    );
                })}

                {/* Pager*/}
                {/* <div className="d-flex justify-content-end mb-4">
                <a className="btn btn-primary text-uppercase" href="#!">
                    Older Posts →
                </a>
            </div> */}
            </>
        </Loading>
    );
};
