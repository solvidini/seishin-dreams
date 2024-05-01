import { getLocaleExtension } from "@/_utils"
import { ExternalLink } from "@/app/_components/ExternalLink"
import { PageTitle } from "@/app/_components/PageTitle"
import { fetchDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { socialMedia } from "../../../_config"
import { Book } from "./_components/Book"
import { books } from "./_data"

export default async function Books({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return (
		<main className="min-h-screen flex flex-col items-center fade-in mb-20">
			<PageTitle>{`📚 ${d.books.title} 📚`}</PageTitle>
			<article className="overflow-auto max-w-con-min w-full flex flex-col gap-4 p-4 pt-2 pb-6 md:p-6 xs:pt-4 text-left mx-auto">
				<p>{d.books.description[0]} ✨ 🎨</p>
				<div className="flex flex-col">
					<h3 className="font-semibold text-secondary mb-1">
						{d.books.description[1]}
					</h3>
					<ExternalLink
						to={socialMedia.author.link}
						className="inline-flex items-center gap-2 w-min hover:scale-110"
					>
						<span className="whitespace-nowrap">
							{d.books["author"]} {socialMedia.author.img}
						</span>
					</ExternalLink>
				</div>
			</article>
			<section className="w-full max-w-con flex flex-col items-center justify-center px-4 md:px-6 gap-6">
				<h3 className="font-semibold text-center text-secondary">
					{d.books.description[2]} 🖍️ 📚
				</h3>
				{books.map(({ id, title, height, width, translationKey, pages }) => {
					const dictionaryKey = translationKey as keyof typeof d.books

					return (
						<div
							key={id}
							className="w-full flex flex-col items-center justify-center text-gray-300 rounded-xl p-4 sm:p-6 gap-2 sm:gap-4 bg-dark"
						>
							<h6 className="text-lg lg:text-[21px] font-semibold uppercase font-caveat">
								<span className="text-sm sm:text-md mr-1 sm:mr-2">✨</span>
								{title}
								<span className="text-sm sm:text-md ml-2 sm:ml-3">✨</span>
							</h6>
							<div className="w-full flex items-center flex-col-reverse lg:flex-row justify-center gap-6">
								<p className="relative flex-1 text-center px-6 py-4 bg-secondary-dark cp-dropdown lg:-mt-[48px] before:absolute before:bg-black before:-z-10 before:w-[98%] before:h-[98%] before:top-0 before:left-0 before:translate-x-[1%] before:translate-y-[1%] before:cp-dropdown">
									{d.books[dictionaryKey] as string}
								</p>
								<Book
									className="flex-1"
									width={width}
									height={height}
									pages={pages}
									link={`https://www.amazon.${getLocaleExtension(
										lang,
									)}/dp/${id}`}
								/>
							</div>
						</div>
					)
				})}
				{/* <ComingSoon title={`${d.books.coming_soon.title} 🖍️ ✨`} description={d.books.coming_soon.description} /> */}
			</section>
		</main>
	)
}
