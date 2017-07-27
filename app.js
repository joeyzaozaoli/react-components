var GroceryList = (props) => (
  <ul>
    <GroceryListItem item={props.items[0]}/>
    <GroceryListItem item={props.items[1]}/>
  </ul>
)

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<GroceryList items={['Seaweed Salad', 'Coconut Ice Cream']}/>, document.getElementById('app'));
