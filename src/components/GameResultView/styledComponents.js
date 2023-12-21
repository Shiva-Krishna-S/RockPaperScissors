import styled from 'styled-components'

export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    margin-top: 45px;
`

export const PlayersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const PlayerChoice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const PlayerText = styled.p`
  color: #ffffff;
  text-align: center;
`

export const SelectedImage = styled.img`
  width: 160px;
  height: 160px;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultText = styled.p`
  text-align: center;
  color: #ffffff;
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 21px;
  height: 40px;
  padding-left: 16px;
  padding-top: 0px;
  padding-bottom: 8px;
  padding-right: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
`
