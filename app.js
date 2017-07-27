var GroceryList = () => (
  <ul>
    <Salad />
    <IceCream />
  </ul>
)

var Salad = () => (
  <li>Seaweed Salad</li>
)

var IceCream = () => (
  <li>Coconut Ice Cream</li>
)

ReactDOM.render(<GroceryList />, document.getElementById('app'));
