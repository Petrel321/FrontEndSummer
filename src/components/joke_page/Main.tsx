import React from 'react';
import styles from '@/styles/joke_page/Main.module.css';
import Image from 'next/image';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { MainProps } from './interfaces';

dayjs.extend(relativeTime);

const Main: React.FC<MainProps> = ({ comicData, error }) => {
  return (
    <main>
      <div className="container">
        <section className={styles.comics}>
          <h1 className={styles.comics__header}>
            Hello, dear friend, here you can find fantastic comic!
          </h1>
          <article className={styles.comics__comic}>
            {error && <p>Error: {error}</p>}
            {comicData && (
              <>
                <div className={styles.comic__header}>
                  <h2 id={styles.comic__title}>{comicData.safe_title}</h2>
                  <p id={styles.comic__date}>
                    Published:{' '}
                    {dayjs(
                      `${comicData.year}-${comicData.month}-${comicData.day}`,
                    ).fromNow()}
                  </p>
                </div>
                <Image
                  id={styles.comic__image}
                  src={comicData.img}
                  width={655}
                  height={277}
                  alt={comicData.alt}
                  draggable="false"
                />
              </>
            )}
          </article>
        </section>
      </div>
    </main>
  );
};

export default Main;
