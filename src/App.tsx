import logo from './logo.svg';
import './App.css';
import i18n from './i18n';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from './duck/store';
import { useCallback } from 'react';
import { setIsAuthenticated } from './duck/actions/auth';

function App() {
    const { isAuthenticated } = useSelector((state: AppState) => state.auth);
    const dispatch = useDispatch();

    const changeAuthenticationState = useCallback((state: boolean) => {
        dispatch(setIsAuthenticated(state));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {i18n.t('learnReact')}
                </a>
                <span>
                    {isAuthenticated ? i18n.t('loggedIn') : i18n.t('loggedOut')}
                </span>
                <button
                    onClick={() => changeAuthenticationState(!isAuthenticated)}
                >
                    {i18n.t(isAuthenticated ? 'logout' : 'login')}
                </button>
            </header>
        </div>
    );
}

export default App;
