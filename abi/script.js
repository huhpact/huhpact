const destinations = [
	{
			id: 1,
			title: "🇨🇦 Canada",
			description: "Erlebe die atemberaubenden Landschaften und unberührte Wildnis Kanadas, von majestätischen Bergen bis zu glitzernden Seen.",
			image: "/abi/paysage-lac-montagne-canada.jpg",
			rating: 4,
			price: "€3,000",
			duration: "10 Tage",
			location: "Montréal, Ottawa, Toronto"
	},
	{
			id: 2,
			title: "🇬🇧 Großbritannien",
			description: "Erlebe die faszinierende Geschichte und pulsierende Kultur Großbritanniens, von majestätischen Schlössern bis zu lebendigen Metropolen. (und mach den Koala happy)",
			image: "/abi/great-britain.jpg",
			rating: 4,
			price: "€4,500",
			duration: "10 Tage",
			location: "London"
	},
	{
			id: 3,
			title: "🇺🇸 United States",
			description: "Erlebe die endlose Vielfalt der USA, von pulsierenden Metropolen bis zu atemberaubenden Nationalparks. (und mach den Koala sauer)",
			image: "/abi/la.jpg",
			rating: 4.5,
			price: "€7,500",
			duration: "10 Tage",
			location: "Los Angeles, Las Vegas"
	},
	{
			id: 4,
			title: "🇪🇬 Ägypten",
			description: "Erlebe die faszinierende Geschichte und exotische Schönheit Ägyptens, von den majestätischen Pyramiden bis zu den traumhaften Stränden des Roten Meeres.",
			image: "/abi/egypt.jpg",
			rating: 4,
			price: "€3,500",
			duration: "10 Tage",
			location: "Kairo"
	},
	{
		id: 5,
		title: "🇰🇷 Südkorea",
		description: "Erlebe die perfekte Mischung aus Tradition und Moderne in Südkorea, von den pulsierenden Straßen Seouls bis zu den ruhigen Tempeln und atemberaubenden Landschaften.",
		image: "/abi/coree-du-sud.jpg",
		rating: 4.5,
		price: "€6.600",
		duration: "10 Tage",
		location: "Seoul"
	},
	{
		id: 6,
		title: "🇯🇵 Japan",
		description: "Erlebe die faszinierende Kontraste Japans, von den neonbeleuchteten Straßen Tokios bis zu den ruhigen Tempeln und atemberaubenden Landschaften des Landes der aufgehenden Sonne.",
		image: "/abi/japon.jpeg",
		rating: 5,
		price: "€7.500",
		duration: "10 Tage",
		location: "Tokio, Osaka, Kyoto"
	},
	{
		id: 7,
		title: "🇦🇪 UAE",
		description: "Erlebe den Luxus und die atemberaubende Architektur Dubais, von den ikonischen Wolkenkratzern bis zu den luxuriösen Einkaufszentren und Wüstenlandschaften.",
		image: "/abi/dubai.jpg",
		rating: 3.5,
		price: "€5.000",
		duration: "10 Tage",
		location: "Dubai"
	},
	{
		id: 7,
		title: "🇦🇺 Australien",
		description: "Erlebe die unberührte Natur und die lebendigen Städte Australiens, von den ikonischen Great Barrier Reef und Outback bis zu den aufregenden Metropolen Sydney und Melbourne.",
		image: "/abi/australie.jpg",
		rating: 4,
		price: "€7.500",
		duration: "10 Tage",
		location: "Sydney, Melbourne"
	}
];

function createRatingStars(rating) {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 >= 0.5;
	let stars = '';
	
	for (let i = 0; i < fullStars; i++) {
			stars += '<i class="fas fa-star"></i>';
	}
	
	if (hasHalfStar) {
			stars += '<i class="fas fa-star-half-alt"></i>';
	}
	
	const emptyStars = 5 - Math.ceil(rating);
	for (let i = 0; i < emptyStars; i++) {
			stars += '<i class="far fa-star"></i>';
	}
	
	return stars;
}

function createDestinationCard(destination) {
	const card = document.createElement('div');
	card.className = 'destination__card';
	
	card.innerHTML = `
			<div class="card__image">
					<img src="${destination.image}" alt="${destination.title}">
			</div>
			<div class="card__content">
					<div class="card__header">
							<h3 class="card__title">${destination.title}</h3>
							<div class="rating">
									${createRatingStars(destination.rating)}
							</div>
					</div>
					<p class="card__description">${destination.description}</p>
					<div class="card__footer">
							<span class="price">${destination.price}</span>
							<span class="duration"><i class="fas fa-clock"></i>${destination.duration}</span>
					</div>
			</div>
	`;
	
	card.addEventListener('click', () => openModal(destination));
	return card;
}

function openModal(destination) {
	const modal = document.getElementById('destinationModal');
	modal.classList.add('active');
	
	document.getElementById('modalTitle').textContent = destination.title;
	document.getElementById('modalImage').src = destination.image;
	document.getElementById('modalImage').alt = destination.title;
	document.getElementById('modalDescription').textContent = destination.fullDescription;
	document.getElementById('modalRating').innerHTML = createRatingStars(destination.rating);
	document.getElementById('modalLocation').textContent = destination.location;
	document.getElementById('modalDuration').textContent = destination.duration;
	document.getElementById('modalPrice').textContent = destination.price;
	document.getElementById('modalKeywords').textContent = destination.keywords;
	
	document.body.style.overflow = 'hidden';
}

function closeModal() {
	const modal = document.getElementById('destinationModal');
	modal.classList.remove('active');
	document.body.style.overflow = '';
}

function updateTimeline() {
	const timeline = document.querySelector('.progress__line');
	const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
	timeline.style.height = `${scrollPercent}%`;
}

function checkCardVisibility() {
	const cards = document.querySelectorAll('.destination__card');
	const triggerBottom = window.innerHeight * 0.8;

	cards.forEach(card => {
			const cardTop = card.getBoundingClientRect().top;
			if (cardTop < triggerBottom) {
					card.classList.add('visible');
			}
	});
}

function initializeApp() {
	const container = document.createElement('div');
	container.className = 'destinations__container';
	
	const timeline = document.createElement('div');
	timeline.className = 'timeline';
	timeline.innerHTML = '<div class="progress__line"></div>';
	
	document.querySelector('main').appendChild(timeline);
	document.querySelector('main').appendChild(container);
	
	destinations.forEach(destination => {
			container.appendChild(createDestinationCard(destination));
	});
	
	document.querySelector('.close__modal').addEventListener('click', closeModal);
	
	document.getElementById('destinationModal').addEventListener('click', (e) => {
			if (e.target === document.getElementById('destinationModal')) {
					closeModal();
			}
	});

	window.addEventListener('scroll', () => {
			updateTimeline();
			checkCardVisibility();
	});

	checkCardVisibility();
}

document.addEventListener('DOMContentLoaded', initializeApp);

document.addEventListener('mousemove', (e) => {
	const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
	const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
	document.querySelector('.background').style.transform = `translate(${moveX}px, ${moveY}px)`;
});