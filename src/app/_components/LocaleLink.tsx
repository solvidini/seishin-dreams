import { useLocale } from "@/_contexts/locale-context"
import classNames from "classnames"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC, ReactNode } from "react"

interface ILocaleLinkProps {
	children: ReactNode
	to: string
	onClick?(): void
	className?: string
}

export const LocaleLink: FC<ILocaleLinkProps> = ({
	children,
	to,
	onClick,
	className,
}) => {
	const pathname = usePathname()
	const { getLocaleUrl } = useLocale()

	return (
		<Link
			onClick={onClick}
			className={classNames(
				className,
				pathname === getLocaleUrl(to)
					? "text-white animate-text-glow"
					: "text-gray-200",
			)}
			href={getLocaleUrl(to)}>
			{children}
		</Link>
	)
}
