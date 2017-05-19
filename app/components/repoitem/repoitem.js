import { h, render, Component } from 'preact';

export default class RepoItem extends Component {
    render() {
        return (
            <li>
                {this.props.item}
            </li>
        );
    }
}
