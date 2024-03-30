export interface IPage {
	src: string
}

export interface IBook {
	id: string
	title: string
	width: number
	height: number
	translationKey: string
	pages: Array<IPage>
}
