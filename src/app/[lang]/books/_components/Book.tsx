"use client"

import Image from "next/image"
import { FC, useEffect, useState } from "react"
import { useSwipeable } from "react-swipeable"

import BREAKPOINTS from "@/_config/breakpoints.json"
import { useLocale } from "@/_contexts/locale-context"
import { ArrowButton } from "@/app/_components/ArrowButton"
import { ExternalLink } from "@/app/_components/ExternalLink"
import { twMerge } from "tailwind-merge"

interface BookProps {
	pages: { src: string }[]
	width: number
	height: number
	link: string
	title?: string
	className?: string
}

export const Book: FC<BookProps> = ({
	title,
	pages,
	width,
	height,
	link,
	className,
}) => {
	const { dictionary: d } = useLocale()
	const [bookSize, setBookSize] = useState({ width, height })
	const [currentPage, setCurrentPage] = useState(0)

	useEffect(() => {
		const handleResize = () => {
			if (typeof window !== "undefined") {
				const isSmall =
					window.innerWidth < Number(BREAKPOINTS.xs.replace("px", ""))
				const newSize = {
					width: isSmall ? width * 0.7 : width,
					height: isSmall ? height * 0.7 : height,
				}
				setBookSize(newSize)
			}
		}

		handleResize()
		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const nextSlide = () => {
		setCurrentPage((prevPage) => {
			const nextPage = prevPage + 2
			return nextPage >= pages.length + 1 ? 0 : nextPage
		})
	}

	const prevSlide = () => {
		setCurrentPage((prevPage) => {
			const prevPageCandidate = prevPage - 2
			return prevPageCandidate < 0 ? 0 : prevPageCandidate
		})
	}

	const swipeHandlers = useSwipeable({
		onSwipedLeft: nextSlide,
		onSwipedRight: prevSlide,
	})

	return (
		<div
			className={twMerge(
				"relative max-w-full flex flex-col items-center justify-center gap-4 py-2",
				className,
			)}
		>
			{title && (
				<h3 className="text-lg text-semibold text-secondary z-0">{title}</h3>
			)}
			<div
				className="flex items-center justify-center transition-transform duration-500"
				style={{
					width: bookSize.width * 2,
					height: bookSize.height,
					perspective: "1000px",
					transformStyle: "flat",
					transform:
						currentPage === 0
							? "translateX(-25%)"
							: currentPage === pages.length
							? "translateX(25%)"
							: "",
				}}
				{...swipeHandlers}
			>
				<div className="z-[1000] absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-black/10" />
				{pages.map((page, index) => (
					<div
						key={index}
						className="absolute top-0 left-1/2 -translate-1/2 transition-all duration-500"
						style={{
							width: bookSize.width,
							height: bookSize.height,
							perspectiveOrigin: "left",
							transformOrigin: "left",
							transform: `rotateY(${index < currentPage ? "-180deg" : "0deg"})`,
							zIndex:
								index === currentPage
									? "20"
									: index === currentPage - 1 || index === currentPage + 1
									? "10"
									: "0",
						}}
					>
						<Image
							src={page.src}
							alt={`Page ${index}`}
							width={bookSize.width}
							height={bookSize.height}
							className="w-full h-full object-cover"
							style={{
								transform: currentPage === index + 1 ? "rotateY(-180deg)" : "",
								transitionDelay: currentPage === index + 1 ? "100ms" : "250ms",
							}}
							priority
						/>
					</div>
				))}
			</div>
			<div className="w-full flex items-center justify-center gap-8 z-0">
				<ArrowButton
					onClick={prevSlide}
					position="left"
					className={twMerge(
						"animate-bounceLeft",
						currentPage === 0 && "opacity-30 cursor-not-allowed",
					)}
				/>
				<ExternalLink
					className="text-secondary uppercase font-semibold hover:underline"
					to={link}
				>
					{d.common.buy_now}
				</ExternalLink>
				<ArrowButton
					onClick={nextSlide}
					position="right"
					className="animate-bounceRight"
				/>
			</div>
		</div>
	)
}
