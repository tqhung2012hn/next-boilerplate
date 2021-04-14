import Head from 'next/head';

import Home from '@/containers/Home';
import AppLayout from '@/layouts/AppLayout';

export default function HomePage() {
    return (
        <AppLayout>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Home />
        </AppLayout>
    );
}
