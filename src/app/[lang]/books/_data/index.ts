import { coloringBookAnimalsData } from "./coloring-book-animals"
import { coloringBookMindfulnessData } from "./coloring-book-mindfulness"
import { IBook } from "./types"

const books: Array<IBook> = [
	coloringBookMindfulnessData,
	coloringBookAnimalsData,
]

export { books }
