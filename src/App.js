import React from 'react';
import './css/index.css';
import Tile from './components/Tile';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        };
        this.flip = this.flip.bind(this);
    }
    flip() {
        this.setState(prevState => ({
            opened: !prevState.opened
        }));
    }
    render() {
        return (<div>
            <Tile opened={this.state.opened} onClick={this.flip}/>
        </div>);
    }
}

const App = () => (
    <div className='App'>
        <Example/>
    </div>
);

export default App;
