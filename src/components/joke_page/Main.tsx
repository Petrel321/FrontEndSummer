import React, { useState } from 'react';
import styles from "@/styles/joke_page/Main.module.css";
import { ComicData } from './interfaces';
import Image from 'next/image';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);


const fetchComicId = async (email: string): Promise<string> => {
    const emailParam = new URLSearchParams({ email });
    try {
        const response = await fetch(`https://fwd.innopolis.university/api/hw2?${emailParam.toString()}`);
        if (!response.ok) {
            throw new Error('Error connecting with network');
        }
        return await response.text();
    } catch (error) {
        throw new Error('Error fetching comic ID: ' + (error instanceof Error ? error.message : String(error)));
    }
}

const fetchComicData = async (comicId: string): Promise<ComicData> => {
    try {
        const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        if (!response.ok) {
            throw new Error('Error connecting with network');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Error fetching comic data: ' + (error instanceof Error ? error.message : String(error)));
    }
}

const Main: React.FC = () => {
    const [comicData, setComicData] = useState<ComicData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [btnVisble, setBtnVisible] = useState<boolean>(true);

    const fetchComic = async (): Promise<void> => {
        const email = "i.sannikov@innopolis.university";
        setLoading(loading => loading = true);
        setError(error => error = null);
        setBtnVisible(btnVisble => btnVisble = false);

        try {
            const comicId = await fetchComicId(email);
            const data = await fetchComicData(comicId);
            setComicData(comicData => comicData = data);
        } catch (error) {
            setError(error instanceof Error ? error.message : String(error));
        } finally {
            setLoading(loading => loading = false);
        }
    }

    return (
        <main>
            <div className="container">
                <section className={`${styles.comics}`}>
                    <h1 className={`${styles.comics__header}`}>Hello, dear friend, here you can find fantastic comic!</h1>
                    <article className={`${styles.comics__comic}`}>
                        {btnVisble && <button id={`${styles.fetch__comic}`} onClick={fetchComic}>Fetch comic!</button>}
                        {loading && <p id={`${styles.comic__loader}`}>Loading....</p>}
                        {error && <p>Error: {error}</p>}
                        {comicData && (
                            <>
                                <div className={`${styles.comic__header}`}>
                                    <h2 id={`${styles.comic__title}`}>{comicData.safe_title}</h2>
                                    <p id={`${styles.comic__date}`}>
                                        Published: {dayjs(`${parseInt(comicData.year)}-${parseInt(comicData.month)}-${parseInt(comicData.day)}`).fromNow()}
                                    </p>
                                </div>
                                <Image id={`${styles.comic__image}`} src={`/FrontEndSummer/${comicData.img}`} alt={comicData.alt} draggable="false" />
                            </>
                        )}
                    </article>
                </section>
            </div>
        </main>
    );
};

export default Main;