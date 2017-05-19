import { h, render, Component } from 'preact';
import RepoList from './components/repolist/repolist';


class Clock extends Component {
    render() {
        return <RepoList />;
    }
}

render(<Clock />, document.body);