"use client"

import Image from "next/image"
import { FC, useEffect, useState } from "react"
import { useSwipeable } from "react-swipeable"

import { useLocale } from "@/_contexts/locale-context"
import { ArrowButton } from "@/app/_components/ArrowButton"
import { ExternalLink } from "@/app/_components/ExternalLink"
import { twMerge } from "tailwind-merge"

interface IItemsData {
	src: string
	title: string
	url: string
}

interface ICarouselProps {
	items: IItemsData[]
	height?: number
}

export const Carousel: FC<ICarouselProps> = ({ items, height = 400 }) => {
	const { dictionary: d } = useLocale()
	const [activeIndex, setActiveIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) =>
				prevIndex === items.length - 1 ? 0 : prevIndex + 1,
			)
		}, 4000)

		return () => clearInterval(interval)
	}, [items, activeIndex])

	const handlers = useSwipeable({
		onSwipedLeft: () => nextSlide(),
		onSwipedRight: () => prevSlide(),
	})

	const nextSlide = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === items.length - 1 ? 0 : prevIndex + 1,
		)
	}

	const prevSlide = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? items.length - 1 : prevIndex - 1,
		)
	}

	const goToIndex = (index: number) => {
		setActiveIndex(index)
	}

	return (
		<div
			className="relative w-full flex flex-col items-center justify-center gap-2"
			style={{ height }}
		>
			<div
				className="overflow-hidden rounded-lg relative"
				{...handlers}
			>
				<div
					className="w-full h-full flex transition-transform duration-500 ease-in-out"
					style={{ transform: `translateX(-${activeIndex * 100}%)` }}
				>
					{items.map((data) => (
						<div
							key={data.title.replace(" ", "-")}
							className="relative w-full h-full flex-shrink-0"
						>
							<Image
								src={data.src}
								alt={data.title}
								width={400}
								height={height}
								className="w-auto h-full m-auto transition-opacity duration-500 image-fade-away"
								priority
							/>

							<div className="absolute p-2 bg-black/50 rounded-md z-10 left-1/2 bottom-[10%] -translate-x-1/2 drop-shadow-md text-center mt-2">
								<h3 className="text-lg whitespace-nowrap mb-2">{data.title}</h3>
								<ExternalLink
									className="text-secondary uppercase font-semibold hover:underline"
									to={data.url}
								>
									{d.common.buy_now}
								</ExternalLink>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="absolute top-1/2 left-4 transform -translate-y-1/2">
				<ArrowButton
					onClick={prevSlide}
					position="left"
					className="animate-bounceLeft focus:outline-none"
				/>
			</div>
			<div className="absolute top-1/2 right-4 transform -translate-y-1/2">
				<ArrowButton
					onClick={nextSlide}
					position="right"
					className="animate-bounceRight focus:outline-none"
				/>
			</div>

			<div className="flex gap-2">
				{items.map((_, index) => (
					<button
						key={index}
						onClick={() => goToIndex(index)}
						className={twMerge(
							"w-4 h-4 rounded-full border-2 border-secondary focus:outline-none",
							activeIndex === index && "bg-secondary",
						)}
					/>
				))}
			</div>
		</div>
	)
}
