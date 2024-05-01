import { FC } from "react"

interface IComingSoonProps {
	title: string
	description: string
}

export const ComingSoon: FC<IComingSoonProps> = ({ title, description }) => (
	<div className="w-full max-w-con-min flex flex-col items-center justify-center gap-4 mt-6 md:mt-8">
		<h3 className="text-lg text-secondary">{title}</h3>
		<p>{description}</p>
	</div>
)
