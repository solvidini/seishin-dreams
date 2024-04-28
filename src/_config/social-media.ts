export type ISocialMediaType =
	| "facebook"
	| "instagram"
	| "tiktok"
	| "pinterest"
	| "youtube"
	| "spreadshirt"
	| "redbubble"
	| "soundcloud"
	| "author"

export interface ISocialMedia {
	title: string
	img: string
	link: string
}

export const socialMedia: Record<ISocialMediaType, ISocialMedia> = {
	facebook: {
		title: "Facebook",
		img: "/facebook.svg",
		link: "https://www.facebook.com/seishin.dreams",
	},
	instagram: {
		title: "Instagram",
		img: "/instagram.svg",
		link: "https://instagram.com/seishin.dreams",
	},
	tiktok: {
		title: "TikTok",
		img: "/tiktok.svg",
		link: "https://tiktok.com/@seishin.dreams",
	},
	pinterest: {
		title: "Pinterest",
		img: "/pinterest.svg",
		link: "https://pinterest.com/seishindreams",
	},
	youtube: {
		title: "YouTube",
		img: "/youtube.svg",
		link: "https://www.youtube.com/@seishin.dreams",
	},
	spreadshirt: {
		title: "Spreadshirt",
		img: "/spreadshirt.svg",
		link: "https://www.spreadshirt.pl/shop/user/seishin+dreams",
	},
	redbubble: {
		title: "Redbubble",
		img: "/redbubble.svg",
		link: "https://seishindreams.redbubble.com",
	},
	soundcloud: {
		title: "SoundCloud",
		img: "/soundcloud.svg",
		link: "https://soundcloud.com/solvidi/sets/seishin-dreams",
	},
	author: {
		title: "author",
		img: "📖",
		link: "https://www.amazon.com/stores/author/B0CP8MXTWK",
	},
}
