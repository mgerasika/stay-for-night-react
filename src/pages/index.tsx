import { RequestAddFormContainer } from '@/containers/request-add-form.container';
import { Layout } from '@/general-ui/layout/layout';
import React from 'react';

export default function Index(): JSX.Element {
    return <Layout content={<RequestAddFormContainer />} />;
}
