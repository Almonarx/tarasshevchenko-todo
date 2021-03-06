import { Header } from './partials/header';
import { Pages } from './pages';
import { Sidebar } from './partials/sidebar';
import { Footer } from './partials/footer';

import './app.scss';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false
    };
  }

  setLoginState = (login) => {
    this.setState({ login });
  };

  render() {
    const { login } = this.state;

    return (
      <div className="container">
        <Header
          login={login}
          setLoginState={this.setLoginState}
        />
        <Sidebar />
        <Pages
          data={login}
          setLoginState={this.setLoginState}
        />

        <Footer />
      </div>
    );
  }
}
