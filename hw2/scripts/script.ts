import { ComicData } from "./interfaces";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

async function fetchComicId(email: string): Promise<string> {
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

async function fetchComicData(comicId: string): Promise<ComicData> {
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

function displayComic(comicData: ComicData) {
    const comicTitle = document.getElementById("comic__title") as HTMLHeadingElement;
    const comicImg = document.getElementById("comic__image") as HTMLImageElement;
    const comicDate = document.getElementById("comic__date") as HTMLParagraphElement;
    
    comicTitle.textContent = comicData.safe_title;
    comicImg.src = comicData.img;
    comicImg.alt = comicData.alt;

    comicDate.textContent = "Published: " + dayjs(
        `${parseInt(comicData.year)}-${parseInt(comicData.month)}-${parseInt(comicData.day)}`
    ).fromNow()
}

const fetchComic = document.getElementById('fetch__comic') as HTMLButtonElement;

fetchComic.addEventListener('click', async (): Promise<void> => {
    const email = "i.sannikov@innopolis.university" as string;
    const btnStatus = document.getElementById("fetch__comic") as HTMLButtonElement;
    const comicHeader = document.getElementById("header") as HTMLHeadingElement;
    const comicImage = document.getElementById("comic__image") as HTMLImageElement;
    const comicLoader = document.getElementById("comic__loader") as HTMLParagraphElement;

    try {
        comicLoader.classList.remove("hidden");
        btnStatus.classList.add("hidden");

        const comicId = await fetchComicId(email);
        const comicData = await fetchComicData(comicId);

        displayComic(comicData);
        
        comicLoader.classList.add("hidden");
        comicHeader.classList.remove("hidden");
        comicImage.classList.remove("hidden");
    } catch (error) {
        comicLoader.classList.add("hidden");
        btnStatus.classList.add("hidden");
        console.error('Fetch error:', error);
    }
})
