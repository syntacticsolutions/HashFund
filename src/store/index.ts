import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';

export default 
    import('shared/auth')
    .then(({default: {authReducer}}) => {

        console.log('test')
        
        const reducers = {
            authReducer
        }
        
        const rootReducer = combineReducers(reducers);

        const store = configureStore({
            reducer: rootReducer,
            devTools: process.env.NODE_ENV !== 'production',
        });

        return store
    });


