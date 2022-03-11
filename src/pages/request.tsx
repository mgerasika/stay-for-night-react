import { Layout } from '@/general-ui/layout/layout';
import { RequestAddFormContainer } from '@/containers/request-add-form.container';
import React from 'react';

export default function Request(): JSX.Element {
    return <Layout content={<RequestAddFormContainer />} />;
}
