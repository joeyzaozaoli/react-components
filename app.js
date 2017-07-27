var GroceryList = (props) => (
  <ul>
    <GroceryListItem item={props.items[0]}/>
    <GroceryListItem item={props.items[1]}/>
  </ul>
)

var GroceryListItem = (props) => (
  <li>{props.item}</li>
)

ReactDOM.render(<GroceryList items={['Seaweed Salad', 'Coconut Ice Cream']}/>, document.getElementById('app'));
