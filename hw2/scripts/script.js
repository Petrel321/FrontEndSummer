async function fetchComicId(email) {
    const emailParam = new URLSearchParams({ email });
    try {
        const response = await fetch(`https://fwd.innopolis.university/api/hw2?${emailParam.toString()}`);
        if (!response.ok) {
            throw new Error('Error connecting with network');
        }
        return await response.text();
    } catch (error) {
        throw new Error('Error fetching comic ID: ' + error.message);
    }
}

async function fetchComicData(comicId) {
    try {
        const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        if (!response.ok) {
            throw new Error('Error connecting with network');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Error fetching comic data: ' + error.message);
    }
}

function displayComic(comicData) {
    const comicTitle = document.getElementById("comic__title");
    const comicImg = document.getElementById("comic__image");
    const comicDate = document.getElementById("comic__date");
    
    comicTitle.textContent = comicData.safe_title;
    comicImg.src = comicData.img;
    comicImg.alt = comicData.alt;

    comicDate.textContent = "Published: " + new Date(comicData.year, comicData.month - 1, comicData.day).toLocaleDateString();
}

async function fetchComic() {
    const email = "i.sannikov@innopolis.university";
    const btnStatus = document.getElementById("fetch__comic");
    const comicHeader = document.getElementById("header");
    const comicImage = document.getElementById("comic__image");
    const comicLoader = document.getElementById("comic__loader");

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
}