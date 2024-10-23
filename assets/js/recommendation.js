import { recommendationData } from './data.js';

function main() {
    const tanahRekomendasiContainer = document.getElementById("tanah-rekomendasi");

    // Iterate over each tanah item in recommendationData
    recommendationData.forEach(tanah => {
        // Create a card element
        const card = document.createElement('div');
        card.className = "w-full rounded overflow-hidden shadow-lg";

        // Create the image section (use a placeholder image or dynamic image based on your needs)
        const imgDiv = document.createElement('div');
        imgDiv.className = "relative";

        const img = document.createElement('img');
        img.className = "w-full";
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJW9evu0DJujsURWumbiFnVUd0XuCLmfvwA&s"; // Placeholder image
        img.alt = "Tanah Image";

        const priceDiv = document.createElement('div');
        priceDiv.className = "absolute bottom-4 right-4 bg-white/90 rounded px-4 py-2";
        priceDiv.innerHTML = `<span class="font-bold text-xl">Rp. ${tanah.price.toLocaleString()}</span>`;

        imgDiv.appendChild(img);
        imgDiv.appendChild(priceDiv);
        card.appendChild(imgDiv);

        // Create the content section
        const contentDiv = document.createElement('div');
        contentDiv.className = "px-6 py-4 space-y-1 text-md";

        // Location and map link
        const locationDiv = document.createElement('div');
        locationDiv.className = "mb-3 flex items-start gap-2";
        locationDiv.innerHTML = `
        <div>
            <div class="font-bold text-xl mb-2">${tanah.location.address}</div>
            <span class="text-sm underline"><a href="${tanah.location.coordinateGMapsUrl}" target="_blank">Lihat di google maps</a></span>
        </div>
        <button class="p-2 border border-slate-400 rounded-full -mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
            </svg>
        </button>
    `;
        contentDiv.appendChild(locationDiv);

        // Size information
        const sizeDiv = document.createElement('div');
        sizeDiv.className = "flex items-center justify-between";
        sizeDiv.innerHTML = `<p>${tanah.type.charAt(0).toUpperCase() + tanah.type.slice(1)}</p><p>${tanah.size.width} x ${tanah.size.height} m</p>`;
        contentDiv.appendChild(sizeDiv);

        // Installment and negotiable information
        const installmentDiv = document.createElement('div');
        installmentDiv.className = "flex items-center justify-between";
        installmentDiv.innerHTML = `<p>${tanah.isInstallment ? 'Bisa angsur' : 'Tidak bisa angsur'}</p><p>${tanah.monthInstallment} x</p>`;
        contentDiv.appendChild(installmentDiv);

        // Publisher information
        const publisherDiv = document.createElement('p');
        publisherDiv.innerHTML = `Publisher: <span>${tanah.publisher.name} (${tanah.publisher.email})</span>`;
        contentDiv.appendChild(publisherDiv);

        // Append content div to card
        card.appendChild(contentDiv);

        // Create button to buy
        const buttonDiv = document.createElement('div');
        buttonDiv.className = "p-4";
        const button = document.createElement('button');
        button.className = "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
        button.innerText = "Beli";
        buttonDiv.appendChild(button);
        card.appendChild(buttonDiv);

        // Append the card to the container
        tanahRekomendasiContainer.appendChild(card);
    });
}

export default main