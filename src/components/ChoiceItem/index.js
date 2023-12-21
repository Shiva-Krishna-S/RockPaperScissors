import {ListItem, ChoiceImageButton, ChoiceImage} from './styledComponents'

const ChoiceItem = props => {
  const {choiceDetails, onSelectionOfChoice} = props
  const {id, imageUrl} = choiceDetails
  const onClickImage = () => {
    onSelectionOfChoice(id)
  }

  const buttonName = `${id.toLowerCase()}Button`
  return (
    <ListItem>
      <ChoiceImageButton
        type="button"
        aria-label="choice image"
        onClick={onClickImage}
        data-testid={buttonName}
      >
        <ChoiceImage src={imageUrl} alt={id} />
      </ChoiceImageButton>
    </ListItem>
  )
}

export default ChoiceItem
