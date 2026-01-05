let filteredVideos = [];
let currentCategory = 'Alle';
let searchQuery = '';
let sortBy = 'newest';
let viewMode = 'grid';
let likedVideos = new Set();

window.filterByCategory = filterByCategory;
window.toggleTags = toggleTags;
window.searchByTag = searchByTag;
window.openVideoModal = openVideoModal;

function init() {
    if (typeof videoData === 'undefined' || !Array.isArray(videoData)) {
        return;
    }
    try {
        const storedLikes = localStorage.getItem('likedVideos');
        likedVideos = new Set(JSON.parse(storedLikes || '[]'));
    } catch (e) {
        likedVideos = new Set();
    }
    filteredVideos = [...videoData];

    renderCategoryButtons();
    applyFilters();
    updateVideoCount();
    setupEventListeners();
}

function filterByCategory(category) {
    if (currentCategory !== category) {
        currentCategory = category;
        renderCategoryButtons();
        applyFilters();
    }
}

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            applyFilters();
        });
    }

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            sortBy = e.target.value;
            renderVideos();
        });
    }

    const viewModeBtns = document.querySelectorAll('.view-mode-btn');
    viewModeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewMode = btn.dataset.view;
            viewModeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderVideos();
        });
    });

    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('videoModal');

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function applyFilters() {
    const activeData = (typeof videoData !== 'undefined' && Array.isArray(videoData)) ? videoData : [];

    filteredVideos = activeData.filter(video => {
        const matchesCategory = currentCategory === 'Alle' || video.category === currentCategory;

        const lowerSearch = searchQuery.toLowerCase();
        const matchesSearch = lowerSearch === '' ||
            (video.title && video.title.toLowerCase().includes(lowerSearch)) ||
            (video.description && video.description.toLowerCase().includes(lowerSearch)) ||
            (video.tags && video.tags.some(tag => tag.toLowerCase().includes(lowerSearch)));

        return matchesCategory && matchesSearch;
    });

    renderVideos();
    updateVideoCount();
}

function sortVideos(videos) {
    const sorted = [...videos];

    switch(sortBy) {
        case 'newest':
            sorted.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
            break;
        case 'oldest':
            sorted.sort((a, b) => new Date(a.uploadDate) - new Date(b.uploadDate));
            break;
        case 'mostViewed':
            sorted.sort((a, b) => (b.views || 0) - (a.views || 0));
            break;
        case 'mostLiked':
            sorted.sort((a, b) => (b.likes || 0) - (a.likes || 0));
            break;
        case 'title':
            sorted.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
            break;
    }

    return sorted;
}

function renderCategoryButtons() {
    const container = document.getElementById('categoryButtons');
    const activeCategories = (typeof categories !== 'undefined' && Array.isArray(categories)) ? categories : [];

    if (!container) return;

    container.innerHTML = activeCategories.map(cat => `
        <button class="category-btn ${cat === currentCategory ? 'active' : ''}"
                onclick="filterByCategory('${cat.replace(/'/g, "\\'")}')">
            ${cat}
        </button>
    `).join('');
}

function renderVideos() {
    const container = document.getElementById('videoGrid');
    const noResults = document.getElementById('noResults');

    if (!container || !noResults) return;

    const sorted = sortVideos(filteredVideos);
    container.className = `video-grid ${viewMode === 'list' ? 'list-view' : ''}`;

    if (sorted.length === 0) {
        container.innerHTML = '';
        container.style.display = 'none';
        noResults.style.display = 'flex';
        return;
    }

    container.style.display = viewMode === 'list' ? 'block' : 'grid';
    noResults.style.display = 'none';

    container.innerHTML = sorted.map((video, index) => {
        const isLiked = likedVideos.has(video.id);

        return `
            <div class="video-card"
                 data-video-id="${video.id}"
                 onclick="openVideoModal(${video.id})"
                 style="animation-delay: ${index * 0.05}s">
                <div class="video-thumbnail-container">
                    <img src="${video.thumbnail || ''}"
                         alt="${video.title || 'Video Thumbnail'}"
                         class="video-thumbnail">
                    <div class="play-overlay">
                        <svg class="play-icon" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    <div class="video-duration">${video.duration || '0:00'}</div>
                </div>
                <div class="video-info">
                    <h3 class="video-title">${video.title || 'Untitled Video'}</h3>
                    <p class="video-description">${video.description || 'No description available.'}</p>
                    <div class="video-tags" id="tags-${video.id}">
                        ${renderTags(video.tags, video.id)}
                    </div>
                    <div class="video-meta">
                        <span class="video-category">${video.category || 'Uncategorized'}</span>
                        <div class="video-stats">
                            <span class="stat">
                                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path d="M10 4C4.5 4 1 10 1 10s3.5 6 9 6 9-6 9-6-3.5-6-9-6z" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="10" cy="10" r="3" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
                                ${formatNumber(video.views || 0)}
                            </span>
                            <span class="stat ${isLiked ? 'liked' : ''}">
                                <svg width="16" height="16" viewBox="0 0 20 20" fill="${isLiked ? 'currentColor' : 'none'}"><path d="M10 17.5l-1.45-1.32C4.4 12.36 2 10.28 2 7.5 2 5.42 3.42 4 5.5 4c1.74 0 3.41 1.01 4.5 2.09C11.09 5.01 12.76 4 14.5 4 16.58 4 18 5.42 18 7.5c0 2.78-2.4 4.86-6.55 8.68L10 17.5z" stroke="currentColor" stroke-width="1.5"/></svg>
                                ${formatNumber(video.likes || 0)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderTags(tags, videoId) {
    const maxVisible = 3;
    let html = '';
    const videoTags = Array.isArray(tags) ? tags : [];

    videoTags.forEach((tag, index) => {
        const safeTag = tag.replace(/'/g, "\\'");
        const isHidden = index >= maxVisible;

        html += `<span class="tag ${isHidden ? 'hidden' : ''}"
                      data-video="${videoId}"
                      onclick="event.stopPropagation(); searchByTag('${safeTag}')">${tag}</span>`;
    });

    if (videoTags.length > maxVisible) {
        html += `<button class="tag-expand"
                         onclick="event.stopPropagation(); toggleTags(${videoId})">
                    +${videoTags.length - maxVisible} mehr
                 </button>`;
    }

    return html;
}

function toggleTags(videoId) {
    const container = document.getElementById(`tags-${videoId}`);
    if (!container) return;
    const hiddenTags = container.querySelectorAll('.tag.hidden');
    const expandBtn = container.querySelector('.tag-expand');

    const isShowing = hiddenTags.length === 0 || !hiddenTags[0].classList.contains('hidden');

    if (isShowing) {
        container.querySelectorAll('.tag').forEach((tag, index) => {
            if (index >= 3) tag.classList.add('hidden');
        });
        if (expandBtn) expandBtn.textContent = `+${container.querySelectorAll('.tag.hidden').length} mehr`;
    } else {
        hiddenTags.forEach(tag => tag.classList.remove('hidden'));
        if (expandBtn) expandBtn.textContent = 'weniger';
    }
}

function searchByTag(tag) {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = tag;
        searchQuery = tag.toLowerCase();
        applyFilters();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

function updateVideoCount() {
    const countElement = document.getElementById('videoCount');
    if (countElement) {
        countElement.textContent =
            `${filteredVideos.length} Video${filteredVideos.length !== 1 ? 's' : ''}`;
    }
}

function openVideoModal(videoId) {
    const video = (typeof videoData !== 'undefined' && Array.isArray(videoData)) ? videoData.find(v => v.id === videoId) : undefined;
    if (!video) return;

    if (video.views === undefined) {
        video.views = 0;
    }
    video.views++;

    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const likeBtn = document.getElementById('modalLikeBtn');

    if (!modal || !modalVideo || !likeBtn) return;

    const isLiked = likedVideos.has(video.id);

    document.getElementById('modalTitle').textContent = video.title || 'Untitled Video';
    document.getElementById('modalDescription').textContent = video.description || 'No description.';
    document.getElementById('modalCategory').textContent = video.category || 'Uncategorized';
    document.getElementById('modalDuration').textContent = video.duration || '0:00';
    document.getElementById('modalDate').textContent = formatDate(video.uploadDate);
    document.getElementById('modalLikeCount').textContent = video.likes || 0;
    document.getElementById('modalViewCountText').textContent = formatNumber(video.views || 0);

    likeBtn.classList.toggle('liked', isLiked);
    likeBtn.onclick = () => toggleLike(video.id);

    const tagsContainer = document.getElementById('modalTags');
    if (tagsContainer) {
        tagsContainer.innerHTML = (Array.isArray(video.tags) ? video.tags : []).map(tag =>
            `<span class="tag" onclick="searchByTag('${tag.replace(/'/g, "\\'")}'); closeModal();">${tag}</span>`
        ).join('');
    }

    modalVideo.src = video.videoUrl || '';
    modalVideo.load();

    const downloadBtn = document.getElementById('modalDownloadBtn');
    if (downloadBtn) {
        downloadBtn.onclick = (e) => {
            e.stopPropagation();
            downloadVideo(video.videoUrl, video.title);
        };
    }

    renderRelatedVideos(video);

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');

    if (modal) modal.classList.remove('active');
    if (modalVideo) {
        modalVideo.pause();
        modalVideo.src = '';
    }
    document.body.style.overflow = 'auto';

    renderVideos();
}

function toggleLike(videoId) {
    const video = (typeof videoData !== 'undefined' && Array.isArray(videoData)) ? videoData.find(v => v.id === videoId) : undefined;
    if (!video) return;

    const likeBtn = document.getElementById('modalLikeBtn');
    const likeCountElem = document.getElementById('modalLikeCount');

    if (video.likes === undefined) {
        video.likes = 0;
    }

    if (likedVideos.has(videoId)) {
        likedVideos.delete(videoId);
        video.likes--;
        if (likeBtn) likeBtn.classList.remove('liked');
    } else {
        likedVideos.add(videoId);
        video.likes++;
        if (likeBtn) likeBtn.classList.add('liked');
    }

    if (likeCountElem) {
        likeCountElem.textContent = video.likes;
    }
    localStorage.setItem('likedVideos', JSON.stringify([...likedVideos]));

    renderVideos();
}

function formatDate(dateString) {
    if (!dateString) return 'Unknown Date';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid Date';

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('de-DE', options);
}

function downloadVideo(url, title) {
    if (!url) return;
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title || 'video'}.mp4`;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function renderRelatedVideos(currentVideo) {
    const activeData = (typeof videoData !== 'undefined' && Array.isArray(videoData)) ? videoData : [];
    const related = activeData
        .filter(v => v.id !== currentVideo.id)
        .filter(v =>
            v.category === currentVideo.category ||
            (Array.isArray(v.tags) && Array.isArray(currentVideo.tags) && v.tags.some(tag => currentVideo.tags.includes(tag)))
        )
        .slice(0, 4);

    const container = document.getElementById('relatedGrid');
    const relatedSection = document.getElementById('relatedVideos');

    if (!container || !relatedSection) return;

    if (related.length === 0) {
        relatedSection.style.display = 'none';
        return;
    }

    relatedSection.style.display = 'block';

    container.innerHTML = related.map(video => `
        <div class="related-card" onclick="openVideoModal(${video.id})">
            <img src="${video.thumbnail || ''}"
                 alt="${video.title || 'Related Video'}"
                 class="related-thumbnail">
            <div class="related-info">
                <h4 class="related-card-title">${video.title || 'Untitled'}</h4>
            </div>
        </div>
    `).join('');
}

init();