import Main from '@/components/joke_page/Main';
import { ComicData } from '@/components/joke_page/interfaces';
import Head from 'next/head';
import React from 'react';
import { metadata } from '../layout';


const fetchComicId = async (email: string): Promise<string> => {
    const emailParam = new URLSearchParams({ email });
    const response = await fetch(`https://fwd.innopolis.university/api/hw2?${emailParam.toString()}`);
    if (!response.ok) {
        throw new Error('Error connecting with network');
    }
    return await response.text();
}

const fetchComicData = async (comicId: string): Promise<ComicData> => {
    const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
    if (!response.ok) {
        throw new Error('Error connecting with network');
    }
    return await response.json();
}

interface JokeProps {
    comicData: ComicData | null;
    error: string | null;
}

const Joke: React.FC<JokeProps> = async () => {
    const email = "i.sannikov@innopolis.university";
    let comicData: ComicData | null = null;
    let error: string | null = null;
    
    try {
        const comicId = await fetchComicId(email);
        comicData = await fetchComicData(comicId);
    } catch (err) {
        error = err instanceof Error ? err.message : String(err);
    }

    return (
        <>
            <Head>
                <title>{metadata.joke.title}</title>
            </Head>
            <main>
                <noscript>
                    <p>JavaScript is required for this page to work properly.</p>
                </noscript>
                <Main comicData={comicData} error={error} />
            </main>
        </>
    );
}

export default Joke;
