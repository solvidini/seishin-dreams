import Image from "next/image"

import { socialMedia } from "@/_config"
import { ExternalLink } from "@/app/_components/ExternalLink"
import { PageTitle } from "@/app/_components/PageTitle"
import { fetchDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { WallpaperGalery } from "./_components/WallpaperGalery"
import { wallpapers } from "./_data"

export default async function Wallpapers({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return (
		<main className="min-h-screen flex flex-col items-center fade-in mb-10 sm:mb-12 md:mb-20">
			<PageTitle>{`🎨 ${d.wallpapers.title} 🎨`}</PageTitle>
			<article className="max-w-con-min flex flex-col gap-4 p-4 pt-2 pb-6 md:p-6 xs:pt-4 text-left mx-auto">
				<p>{d.wallpapers.description[0]}</p>
				<div className="flex flex-col">
					<h3 className="font-semibold text-secondary mb-1">
						{d.wallpapers.description[1]}
					</h3>
					<ExternalLink
						to={socialMedia.pinterest.link}
						className="inline-flex items-center gap-2 w-min hover:scale-110"
					>
						<span>{socialMedia.pinterest.title}</span>
						<Image
							src={socialMedia.pinterest.img}
							alt={socialMedia.pinterest.title}
							width={30}
							height={30}
							priority
						/>
					</ExternalLink>
				</div>
			</article>
			<section className="w-full max-w-con px-4 md:px-6 flex flex-col">
				<h3 className="font-semibold mb-6 text-center text-secondary">
					{d.wallpapers.description[2]} 🌟 🖼️ ✨
				</h3>
				<WallpaperGalery images={wallpapers} />
			</section>
		</main>
	)
}
