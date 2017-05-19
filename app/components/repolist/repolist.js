import { h, render, Component } from 'preact';
import RepoItem from '../repoitem/repoitem';

export default class RepoList extends Component {
    this.state = {
        items: []
    }
    componentDidMount() {
        fetch('https://api.github.com/users/nicoTrygub/repos')
            .then(response => response.json())
            .then(json => this.setState((state) => {
                items = json;
            }));
    }

    render() {
        return this.state.items.map(item => <RepoItem item={item}/>)
    }
}