import dva from 'dva';
import { createBrowserHistory } from 'history'

import './styles//index.less';

// 1. Initialize
const app = dva({
  history: createBrowserHistory(),
});
window.app=app
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/home').default);
// app.model(require('./models/login').default);
// 4. Router
app.router(require('./routes').default);

// 5. Start
app.start('#root');
