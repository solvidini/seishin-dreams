import { LocaleSwitcher } from "@/app/_components/LocaleSwitcher"
import { fetchDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { SeishinDreamsSVG } from "../_svg/seishin-dreams"
import { BackgroundVideo } from "./_components/BackgroundVideo"

export default async function Home({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const d = await fetchDictionary(lang)

	return (
		<main className="relative min-h-screen w-full fade-in">
			<BackgroundVideo />
			<div className="z-1 absolute top-4 left-4">
				<LocaleSwitcher dropdownPosition="bottom" />
			</div>
			<section className="z-1 absolute top-1/4 left-1/2 -translate-x-1/2 w-full text-center p-4">
				<h1 className="text-[35px] sm:text-[50px] tracking-wider flex flex-col items-center justify-center mb-4">
					<span className="font-caveat">{d.home.welcome}</span>
					<SeishinDreamsSVG className="max-w-full fill-gray-200 w-[600px] h-[150px] animate-svg-rainbow-glow" />
				</h1>
				<span className="text-gray-100 text-xl font-caveat">
					✨ {d.home.quote} ✨
				</span>
			</section>
		</main>
	)
}
