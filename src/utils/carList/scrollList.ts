export const scrollList = (galleryEl: HTMLUListElement | null) => {
	setTimeout(() => {
		if (galleryEl && galleryEl.lastElementChild) {
			scrollBy({
				behavior: 'smooth',
				top: galleryEl.lastElementChild.getBoundingClientRect().height * 1.5,
			})
		}
	}, 250)
}
