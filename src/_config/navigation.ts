import { Dictionary } from "@/_contexts/locale-context"

interface INavigation {
	title: keyof Dictionary["common"]
	to: string
}

export const navigation: INavigation[] = [
	{
		title: "home",
		to: "/",
	},
	{
		title: "about",
		to: "/about",
	},
	{
		title: "books",
		to: "/books",
	},
	{
		title: "prints",
		to: "/prints",
	},
	{
		title: "wallpapers",
		to: "/wallpapers",
	},
	{
		title: "music",
		to: "/music",
	},
	{
		title: "contact",
		to: "/contact",
	},
]