import Image from "next/image"
import { FaEnvelope } from "react-icons/fa"

import { socialMedia } from "@/_config"
import { ExternalLink } from "@/app/_components/ExternalLink"
import { PageTitle } from "@/app/_components/PageTitle"
import { fetchDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"

export default async function Contact({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return (
		<main className="overflow-auto min-h-screen flex flex-col items-center fade-in">
			<PageTitle>{`💌 ${d.contact.title} 💌`}</PageTitle>
			<article className="max-w-con-min flex flex-col items-center gap-6 md:gap-8 p-4 pt-2 pb-6 md:p-6 xs:pt-4 mx-auto">
				<section className="flex flex-col gap-4">
					<div className="flex flex-wrap justify-center">
						<p className="text-left mr-2">{d.contact.description[0]}</p>
						<ExternalLink
							className="text-secondary inline-flex items-center"
							to="mailto:seishin.dreams@gmail.com"
						>
							<FaEnvelope className="mr-1" /> seishin.dreams@gmail.com
						</ExternalLink>
					</div>
					<p className="text-left xs:text-center">
						{d.contact.description[1]} 🚀 ✨
					</p>
				</section>
				<section className="flex items-center justify-center space-x-4 text-blue-300">
					{[
						socialMedia.facebook,
						socialMedia.instagram,
						socialMedia.tiktok,
						socialMedia.pinterest,
						socialMedia.youtube,
					].map((sm) => (
						<ExternalLink
							key={sm.title}
							className="hover:scale-125"
							to={sm.link}
						>
							<Image
								src={sm.img}
								alt={sm.title}
								width={60}
								height={60}
								className="w-[50px] md:w-[60px] h-[50px] md:h-[60px]"
								priority
							/>
						</ExternalLink>
					))}
				</section>
				<Image
					src="/sd.svg"
					alt="SD"
					width={300}
					height={300}
					className="opacity-10 m-2 w-[240px] md:w-[300px] h-[240px] md:h-[300px]"
					priority
				/>
			</article>
		</main>
	)
}
