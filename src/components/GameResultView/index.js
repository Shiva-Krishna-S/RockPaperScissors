import {
  GameResultContainer,
  PlayersContainer,
  PlayerChoice,
  PlayerText,
  SelectedImage,
  ResultContainer,
  ResultText,
  PlayAgainButton,
} from './styledComponents'

const GameResultView = props => {
  const {
    opponentChoiceId,
    yourChoiceId,
    gameResult,
    onPlayAgain,
    choicesList,
  } = props

  const getPlayerImage = playerId => {
    const playerObject = choicesList.find(eachItem => eachItem.id === playerId)
    return playerObject.imageUrl
  }

  const onCliclPlayAgain = () => {
    onPlayAgain()
  }

  const yourImage = getPlayerImage(yourChoiceId)
  const opponentsImage = getPlayerImage(opponentChoiceId)

  return (
    <GameResultContainer>
      <PlayersContainer>
        <PlayerChoice>
          <PlayerText>YOU</PlayerText>
          <SelectedImage src={yourImage} />
        </PlayerChoice>
        <PlayerChoice>
          <PlayerText>OPPONENT</PlayerText>
          <SelectedImage src={opponentsImage} />
        </PlayerChoice>
      </PlayersContainer>
      <ResultContainer>
        <ResultText>{gameResult}</ResultText>
        <PlayAgainButton onClick={onCliclPlayAgain}>Play Again</PlayAgainButton>
      </ResultContainer>
    </GameResultContainer>
  )
}

export default GameResultView
