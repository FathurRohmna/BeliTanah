import { recommendationData } from './data.js';

const tanahRekomendasiContainer = document.getElementById("tanah-rekomendasi");

// Function to load bookmarks from localStorage
const loadBookmarks = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarkedProperties')) || [];
    return bookmarks;
};

// Function to save bookmarks to localStorage
const saveBookmarks = (bookmarks) => {
    localStorage.setItem('bookmarkedProperties', JSON.stringify(bookmarks));
};

// Function to toggle bookmark status
const toggleBookmark = (item) => {
    const bookmarks = loadBookmarks();
    const isAlreadyBookmarked = bookmarks.some(bookmarkedItem => bookmarkedItem.id === item.id);

    if (isAlreadyBookmarked) {
        // Remove from bookmarks
        const updatedBookmarks = bookmarks.filter(bookmarkedItem => bookmarkedItem.id !== item.id);
        saveBookmarks(updatedBookmarks);
    } else {
        // Add to bookmarks
        bookmarks.push(item); // Save the entire item object
        saveBookmarks(bookmarks);
    }
    renderCards(); // Re-render cards to update bookmark status
};

// Function to check if a property is bookmarked
const isBookmarked = (id) => {
    const bookmarks = loadBookmarks();
    return bookmarks.some(bookmarkedItem => bookmarkedItem.id === id);
};
/**
 * Closes the currently open modal by removing the 'open' class and restores body scrolling.
 */
function closeModal() {
    console.log('close')
    document.querySelector('.custom-modal.open')?.classList.remove('open');
    document.body.classList.remove('modal-open');
}

function toggleFormAddArticle(id) {
    document.getElementById(id)?.classList.add('open');
    document.body.classList.add('modal-open');
}


// Function to dynamically populate the negotiable modal with item details
function openNegotiableModal(item) {
    const contentDiv = document.getElementById('negotiable-item-content');
    contentDiv.innerHTML = `
        <p><strong>Location:</strong> ${item.location.address}</p>
        <p><strong>Price:</strong> Rp. ${item.price.toLocaleString()}</p>
        <p><strong>Size:</strong> ${item.size.width} x ${item.size.height} m</p>
        <p><strong>Installment:</strong> ${item.isInstallment ? 'Yes' : 'No'}</p>
        <p><strong>Installment Months:</strong> ${item.monthInstallment}x</p>
        <p><strong>Publisher:</strong> ${item.publisher.name} (${item.publisher.email})</p>
    `;

    if (item.isNegotable) {
        contentDiv.innerHTML += `
            <label for="negotiable-price"><strong>Price (Negotiable):</strong></label>
            <input type="text" id="negotiable-price" class="w-full p-2 border rounded" value="${item.price.toLocaleString()}" />
        `;
    } else {
        contentDiv.innerHTML += `
            <p><strong>Price:</strong> Rp. ${item.price.toLocaleString()}</p>
        `;
    }

    // Update the negotiation logic
    document.getElementById('confirm-negotiation-btn').onclick = () => {
        let negotiatedPrice = item.price;

        // If the item is negotiable, capture the user-updated price
        if (item.isNegotable) {
            const priceInput = document.getElementById('negotiable-price').value;
            negotiatedPrice = parseFloat(priceInput.replace(/,/g, '')); // Convert formatted price back to number
            console.log('Negotiated Price:', negotiatedPrice); // Log the negotiated price for debugging
        }
        closeModal();
    };

    // Update the negotiation logic
    document.getElementById('cancel-negotiation-btn').onclick = () => {
        closeModal();
    };



    // Open the modal
    toggleFormAddArticle('negosiasi-modal');
}


const renderCards = () => {
    tanahRekomendasiContainer.innerHTML = '';
    // Iterate over each tanah item in recommendationData
    recommendationData.forEach((tanah, index) => {
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
        priceDiv.innerHTML = `<span class="font-bold text-xl flex items-center gap-2">Rp. ${tanah.price.toLocaleString()}${tanah.isNegotable ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check-fill" viewBox="0 0 16 16">
  <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
</svg>` : ''}</span>`;

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
            <button data-id="${index}" class="bookmark-btn p-2 border border-slate-400 rounded-full -mr-2 ${isBookmarked(index) ? '!border-blue-400 !bg-slate-400 !text-white' : ''}">
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
        button.onclick = () => openNegotiableModal(tanah);
        buttonDiv.appendChild(button);
        card.appendChild(buttonDiv);

        // Append the card to the container
        tanahRekomendasiContainer.appendChild(card);
    });

    // After rendering, attach event listeners for bookmark buttons
    attachBookmarkEventListeners();
};

// Function to attach event listeners for bookmark buttons
const attachBookmarkEventListeners = () => {
    document.querySelectorAll('.bookmark-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const id = parseInt(event.currentTarget.getAttribute('data-id'));
            const item = recommendationData[id];  // Get the full item from recommendationData based on index
            toggleBookmark({
                ...item,
                id,
            });  // Pass the full item to toggleBookmark
        });
    });
};


renderCards(); // Initial render
