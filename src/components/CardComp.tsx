import type { TCard } from "../types/card.types"
import styles from "./CardComp.module.css"

export type TCardProps = {
	clickProp: (card: TCard) => void
	card: TCard
}

const CardComp = ({ clickProp, card }: TCardProps) => {
	const handleClick = () => {
		clickProp(card)
	}

	return (
		<article
			onClick={handleClick}
			className={`${styles.card} ${card.flipped || card.matched ? styles.animate__rotate : ""}`}
			style={{
				backgroundImage: card.flipped || card.matched ? `url(./imgs/${card.image})` : 'none'
			}}
		>
			{!card.flipped && !card.matched && <span>?</span>}
		</article>
	)
}

export default CardComp