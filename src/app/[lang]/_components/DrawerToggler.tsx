import { FC } from "react"
import { twMerge } from "tailwind-merge"

interface IDrawerTogglerProps {
	isDrawerOpen: boolean
	onClick(): void
}

export const DrawerToggler: FC<IDrawerTogglerProps> = ({
	isDrawerOpen,
	onClick,
}) => (
	<button
		onClick={onClick}
		className="relative transition-transform duration-300 ease-in-out md:hidden rounded-full bg-black w-[50px] h-[50px]"
	>
		<div
			className={twMerge(
				"absolute w-[24px] h-[2px] bg-gray-200 transition-all duration-300 transform origin-center top-1/2 -mt-[6px] left-1/2 -translate-x-[calc(50%+4px)]",
				isDrawerOpen && "w-[28px] rotate-45 bg-white mt-0 -translate-x-1/2",
			)}
		/>
		<div
			className={twMerge(
				"absolute w-[32px] h-[2px] bg-gray-200 transition-all duration-300 transform origin-center top-1/2 left-1/2 -translate-x-1/2",
				isDrawerOpen && "opacity-0 my-0",
			)}
		/>
		<div
			className={twMerge(
				"absolute w-[24px] h-[2px] bg-gray-200 transition-all duration-300 transform origin-center mt-[6px] ml-auto top-1/2 left-1/2 -translate-x-[calc(50%-4px)]",
				isDrawerOpen && "w-[28px] -rotate-45 bg-white mt-0 -translate-x-1/2",
			)}
		/>
	</button>
)
