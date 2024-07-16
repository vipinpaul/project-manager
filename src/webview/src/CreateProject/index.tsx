import React from 'react';
import ReactDOM from 'react-dom/client';

import '../index.css';
import CreateProject from './CreateProject';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CreateProject />
	</React.StrictMode>,
);
