import styled from 'styled-components'

export const PlayViewContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 10px;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`

export const ScoreboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 2px solid #ffffff;
  border-radius: 15px;
`
export const GameName = styled.p`
  font-family: 'Bree Serif';
  color: #ffffff;
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  border-width: 0;
  border-radius: 5px;
`

export const ScoreText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  margin-top: 0;
  color: #223a5f;
`
export const ScoreValue = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  color: #223a5f;
`

export const ChoicesContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const ImagesContainer = styled.ul`
  padding-left: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    max-width: 550px;
    margin-top: 45px;
  }
`
export const RulesButton = styled.button`
  align-self: flex-end;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 21px;
  height: 30px;
  width: 100px;
  padding-left: 16px;
  padding-top: 0px;
  padding-bottom: 8px;
  padding-right: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 20px;
`
