import styles from "./ModalComp.module.css"

export type TModalProps = {
	showModal: boolean
	toggleModal: React.Dispatch<React.SetStateAction<boolean>>
	moves: number
	resetGame: () => void
}

const ModalComp = ({ showModal, toggleModal, moves, resetGame }: TModalProps) => {
	// Get emoji based on performance
	const getEmoji = (moves: number): string => {
		if (moves <= 8) return "🏆" // Perfect!
		if (moves <= 12) return "⭐" // Great!
		if (moves <= 16) return "👍" // Good!
		if (moves <= 20) return "😊" // Not bad!
		return "💪" // Keep practicing!
	}

	const handleRestart = () => {
		toggleModal(false)
		resetGame()
	}

	return (
		<section
			className={styles.final_result}
			style={{ visibility: showModal ? "visible" : "hidden" }}
		>
			<button onClick={handleRestart} className={styles.final_btn}>X</button>
			<div className={styles.final_container}>
				<h2>Final Score</h2>
				<span className={styles.final_score}>{moves} moves</span>
				<span className={styles.final_icon + " final_icon animate__delay-1s"}>
					{getEmoji(moves)}
				</span>
				<span onClick={handleRestart} className={styles.final_text}>
					Click to start again
				</span>
			</div>
		</section>
	)
}

export default ModalComp