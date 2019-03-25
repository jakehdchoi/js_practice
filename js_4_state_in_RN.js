// #1 Components, State & Props | React Native Basics Tutorial
// Unsure Programmer
// https://www.youtube.com/watch?v=Fz0jaApePCk

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            productCount: 0
        }
    }
    addProduct = () => {
        this.setState({
            'productCount': this.state.productCount + 1
        })
    }

    render() {
        return (
            <Button onPress={this.addProduct}></Button>
        )
    }
}
