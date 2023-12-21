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
export const GameName = styled.h1`
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
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 350px;
  height: 230px;
  border-radius: 16px;
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 500px;
  }
`
export const CloseButton = styled.button`
  align-self: flex-end;
  width: 28px;
  height: 28px;
  border: none;
  margin-top: 18px;
  margin-right: 18px;
  outline: none;
  cursor: pointer;
`

export const RulesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

export const RulesImage = styled.img`
  margin-top: 12px;
  margin-bottom: 28px;
  width: 150px;
  height: 150px;
  @media screen and (min-width: 768px) {
    width: 380px;
    height: 380px;
  }
`
