import {Component} from 'react'

import ChoiceItem from '../ChoiceItem'
import GameResultView from '../GameResultView'

import {
  PlayViewContainer,
  ResponsiveContainer,
  ScoreboardContainer,
  GameName,
  ScoreContainer,
  ScoreText,
  ScoreValue,
  ChoicesContainer,
  ImagesContainer,
  RulesButton,
} from './styledComponents'

class PlayView extends Component {
  state = {
    score: 0,
    opponentChoiceId: '',
    yourChoiceId: '',
    isOptionSelected: false,
    gameResult: '',
  }

  getScore = () => {
    const {score, yourChoiceId, opponentChoiceId} = this.state
    let result
    let updatedScore = score
    if (yourChoiceId === 'ROCK') {
      if (opponentChoiceId === 'SCISSORS') {
        updatedScore += 1
        result = 'YOU WON'
      } else if (opponentChoiceId === 'PAPER') {
        updatedScore -= 1
        result = 'YOU LOST'
      } else {
        result = 'IT IS DRAW'
      }
    } else if (yourChoiceId === 'SCISSORS') {
      if (opponentChoiceId === 'PAPER') {
        updatedScore += 1
        result = 'YOU WON'
      } else if (opponentChoiceId === 'ROCK') {
        updatedScore -= 1
        result = 'YOU LOST'
      } else {
        result = 'IT IS DRAW'
      }
    } else if (yourChoiceId === 'PAPER') {
      if (opponentChoiceId === 'ROCK') {
        updatedScore += 1
        result = 'YOU WON'
      } else if (opponentChoiceId === 'SCISSORS') {
        updatedScore -= 1
        result = 'YOU LOST'
      } else {
        result = 'IT IS DRAW'
      }
    }
    this.setState({score: updatedScore, gameResult: result})
  }

  onSelectionOfChoice = selectedId => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * choicesList.length)
    this.setState(
      {
        opponentChoiceId: choicesList[randomNumber].id,
        yourChoiceId: selectedId,
        isOptionSelected: true,
      },
      this.getScore,
    )
  }

  onPlayAgain = () => {
    this.setState({
      opponentChoiceId: '',
      yourChoiceId: '',
      isOptionSelected: false,
      gameResult: '',
    })
  }

  render() {
    const {
      score,
      opponentChoiceId,
      yourChoiceId,
      isOptionSelected,
      gameResult,
    } = this.state
    const {choicesList} = this.props
    return (
      <PlayViewContainer>
        <ResponsiveContainer>
          <ScoreboardContainer>
            <GameName>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </GameName>
            <ScoreContainer>
              <ScoreText>Score</ScoreText>
              <ScoreValue>{score}</ScoreValue>
            </ScoreContainer>
          </ScoreboardContainer>
          <ChoicesContainer>
            {isOptionSelected ? (
              <GameResultView
                opponentChoiceId={opponentChoiceId}
                yourChoiceId={yourChoiceId}
                gameResult={gameResult}
                onPlayAgain={this.onPlayAgain}
                choicesList={choicesList}
              />
            ) : (
              <ImagesContainer>
                {choicesList.map(eachChoice => (
                  <ChoiceItem
                    key={eachChoice.id}
                    choiceDetails={eachChoice}
                    onSelectionOfChoice={this.onSelectionOfChoice}
                  />
                ))}
              </ImagesContainer>
            )}
            <RulesButton>Rules</RulesButton>
          </ChoicesContainer>
        </ResponsiveContainer>
      </PlayViewContainer>
    )
  }
}

export default PlayView
