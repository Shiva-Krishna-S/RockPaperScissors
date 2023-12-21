import {ListItem, ChoiceImageButton, ChoiceImage} from './styledComponents'

const ChoiceItem = props => {
  const {choiceDetails, onSelectionOfChoice} = props
  const {id, imageUrl} = choiceDetails
  const onClickImage = () => {
    onSelectionOfChoice(id)
  }

  return (
    <ListItem>
      <ChoiceImageButton
        type="button"
        aria-label="choice image"
        onClick={onClickImage}
      >
        <ChoiceImage src={imageUrl} />
      </ChoiceImageButton>
    </ListItem>
  )
}

export default ChoiceItem
