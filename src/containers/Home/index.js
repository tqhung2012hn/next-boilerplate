import Card from '@/components/Card';

import { Wrapper, Title, Description, Main, CardList } from './styles';

const Home = () => {
    return (
        <Wrapper>
            <Main>
                <Title>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </Title>
                <Description>
                    Get started by editing <code>pages/index.js</code>
                </Description>
                <CardList>
                    <Card href="https://nextjs.org/docs">
                        <Card.Title>Documentation</Card.Title>
                        <Card.Description>
                            Find in-depth information about Next.js features and
                            API.
                        </Card.Description>
                    </Card>
                    <Card href="https://nextjs.org/learn">
                        <Card.Title>Learn</Card.Title>
                        <Card.Description>
                            Learn about Next.js in an interactive course with
                            quizzes!
                        </Card.Description>
                    </Card>
                    <Card href="https://github.com/vercel/next.js/tree/master/examples">
                        <Card.Title>Examples</Card.Title>
                        <Card.Description>
                            Discover and deploy boilerplate example Next.js
                            projects.
                        </Card.Description>
                    </Card>
                    <Card href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                        <Card.Title>Deploy</Card.Title>
                        <Card.Description>
                            Instantly deploy your Next.js site to a public URL
                            with Vercel.
                        </Card.Description>
                    </Card>
                </CardList>
            </Main>
        </Wrapper>
    );
};

export default Home;
