// Understanding State in React Native
// Justin Nothling
// https://www.youtube.com/watch?v=HatZnLxJB_0

// change button color every time you click by changing state
class App extends Component {
    state = {
        buttonEnabled: true,
    }

    render() {
        const buttonColor = this.state.buttonEnabled ? 'red' : 'blue'
        return (
            <button
                style={[styles.button, { backgroundColor: buttonColor }]}
                onPress={() => this.setState({ buttonEnabled: !this.state.buttonEnabled })}>
                Button
            </button>
        )
    }
}