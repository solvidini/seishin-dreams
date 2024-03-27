import Image from "next/image"

import { ExternalLink } from "@/app/_components/ExternalLink"
import { PageTitle } from "@/app/_components/PageTitle"
import { fetchDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { YouTubeVideo } from "./_components/YouTubeVideo"

const videos = [
	{
		title: "Our Main Theme",
		id: "JzKXzkJ2DNY",
	},
	{
		title: "Crimson Sanctuary",
		id: "d1QvJUWX2KQ",
	},
	{
		title: "Enchanted Forest",
		id: "VXjwe2oLL5g",
	},
	{
		title: "Dream Realm",
		id: "-EruuUfuEAg",
	},
	{
		title: "Christmas Realm",
		id: "3Yi75dmrINU",
	},
	{
		title: "Atlantis Realm",
		id: "clIaWubesw0",
	},
	{
		title: "Zen Realm",
		id: "fnSidbB4G2o",
	},
]

export default async function Music({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return (
		<main className="overflow-auto min-h-screen flex flex-col items-center fade-in mb-12 sm:mb-14 lg:mb-16">
			<PageTitle>{`🎶 ${d.music.title} 🎶`}</PageTitle>
			<article className="max-w-[900px] flex flex-col gap-4 p-4 pt-2 pb-6 md:p-6 xs:pt-4 text-left mx-auto">
				<p>{d.music.description[0]} 🥁</p>
				<div className="flex flex-col">
					<h3 className="font-semibold text-secondary-light mb-1">
						{d.music.description[1]}
					</h3>
					<ExternalLink
						to="https://www.youtube.com/@seishin.dreams"
						className="inline-flex items-center gap-2 w-min hover:scale-110">
						<span>YouTube</span>
						<Image
							src="/youtube.svg"
							alt="YouTube"
							width={30}
							height={30}
							priority
						/>
					</ExternalLink>
					<ExternalLink
						to="https://soundcloud.com/solvidi/sets/seishin-dreams"
						className="inline-flex items-center gap-2 w-min hover:scale-110">
						<span>SoundCloud</span>
						<Image
							src="/soundcloud.svg"
							alt="SoundCloud"
							width={30}
							height={30}
							priority
						/>
					</ExternalLink>
				</div>
				<p>{d.music.description[2]}</p>
			</article>
			<section className="w-full px-4 md:px-6 max-w-[900px] flex flex-col">
				<h3 className="font-semibold mb-4 text-center text-secondary-light">
					{d.music.description[3]} 🎵 🎥 ✨
				</h3>
				<div className="w-full flex flex-col items-center justify-center gap-3">
					{videos.map(({ title, id }) => (
						<div
							className="w-full sm:w-auto"
							key={id}>
							<h6 className="text-tertiary mb-1">{title}</h6>
							<YouTubeVideo videoId={id} />
						</div>
					))}
				</div>
			</section>
		</main>
	)
}
