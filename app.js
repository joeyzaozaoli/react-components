var GroceryList = (props) => (
  <ul>
    <GroceryListItem item={props.items[0]}/>
    <GroceryListItem item={props.items[1]}/>
  </ul>
)

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bolded: false
    };
  }

  render() {
    var style = {
      fontWeight: this.state.bolded ? 'bold' : null
    };

    return (
      <li style={style} onMouseOver={this.handleItemClick.bind(this)}>{this.props.item}</li>
    );
  }

  handleItemClick() {
    this.setState({
      bolded: !this.state.bolded
    });
  }
}

ReactDOM.render(<GroceryList items={['Seaweed Salad', 'Coconut Ice Cream']}/>, document.getElementById('app'));
