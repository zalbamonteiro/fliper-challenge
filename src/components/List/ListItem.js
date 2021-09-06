import { ListItemStyle } from "./List.style"
import { isUndefined } from "../../helpers"

export const ListItem = ({ text, value }) => {
  if (!text || isUndefined(value)) {
    return null
  }

  return (
    <ListItemStyle>
      <p className="listItem__text" data-testid="item-text">
        {text}
      </p>
      <p className="listItem__text">
        <span className="listItem__value" data-testid="item-value">
          {value}
        </span>
      </p>
    </ListItemStyle>
  )
}
