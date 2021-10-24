import React from 'react';
import {ApplicationState} from './store/createRootReducer';
import {ConnectedRouter} from 'connected-react-router';
import AppLayout from './layout/AppLayout';
import {Provider} from 'react-redux';
import {History} from 'history';
import {Store} from 'redux';
import Routes from './routes/routes';

interface MainProps {
    store: Store<ApplicationState>;
    history: History;
}

const App: React.FC<MainProps> = ({store, history}) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppLayout>
                <Routes/>
            </AppLayout>
        </ConnectedRouter>
    </Provider>
);


export default App;
