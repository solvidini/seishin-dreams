import Image from "next/image"

import { socialMedia } from "@/_config"
import { ExternalLink } from "@/app/_components/ExternalLink"
import { PageTitle } from "@/app/_components/PageTitle"
import { fetchDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { Carousel } from "./_components/Carousel"
import { prints } from "./_data"

export default async function Prints({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return (
		<main className="overflow-auto min-h-screen flex flex-col items-center fade-in mb-8">
			<PageTitle>{`👕 ${d.prints.title} 👚`}</PageTitle>
			<article className="max-w-con-min flex flex-col gap-4 p-4 pt-2 pb-6 md:p-6 xs:pt-4 text-left mx-auto">
				<p>{d.prints.description[0]} 🛒 👕 ✨</p>
				<div className="flex flex-col mb-4">
					<h3 className="font-semibold text-secondary-light mb-1">
						{d.prints.description[1]}
					</h3>
					{[socialMedia.redbubble, socialMedia.spreadshirt].map((sm) => (
						<ExternalLink
							key={sm.title}
							to={sm.link}
							className="inline-flex items-center gap-2 w-min hover:scale-110"
						>
							<span>{sm.title}</span>
							<div className="flex items-center justify-center w-[28px] h-[28px] bg-white rounded-full">
								<Image
									src={sm.img}
									alt={sm.title}
									width={30}
									height={30}
									priority
								/>
							</div>
						</ExternalLink>
					))}
				</div>
				<section className="w-full h-full">
					<h3 className="font-semibold text-center text-secondary-light mb-6">
						{d.prints.description[2]} 🌟🛍️
					</h3>
					<Carousel items={prints} />
				</section>
			</article>
			<section></section>
		</main>
	)
}
