// import promise from './promise';

import { h, render, Component } from 'preact';

class Clock extends Component {
    render() {
        let time = new Date().toLocaleTimeString();
        return <span>{ time }</span>;
    }
}

render(<Clock />, document.body);