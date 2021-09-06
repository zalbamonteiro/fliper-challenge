import { ListItem } from "./ListItem"
import { ListStyle } from "./List.style"

export const List = ({ listItens }) => (
  <ListStyle data-testid="list">
    {listItens.map((item) => (
      <ListItem
        key={item.text + item.value}
        text={item.text}
        value={item.value}
      />
    ))}
  </ListStyle>
)
