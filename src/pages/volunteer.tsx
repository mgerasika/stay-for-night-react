import { Layout } from '@/general-ui/layout/layout';
import { VolunteerListContainer } from '@/containers/volunteer-list.container';
import React from 'react';

export default function Volunteer(): JSX.Element {
    return <Layout content={<VolunteerListContainer />} />;
}
