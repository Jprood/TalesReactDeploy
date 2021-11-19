import {Action } from './actions';
// adicione o atributo tipo no inicialState e UserState
export interface TokenState {
    tokens: string,
    names: string,
    tipoUsuario: string,
}

const initialState = {
    tokens: "",
    names: "",
    tipoUsuario: "",
}

export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload, names: state.names, tipoUsuario: state.tipoUsuario};
        }
        case "ADD_NAME": {
            return {names: action.payload, tokens: state.tokens, tipoUsuario: state.tipoUsuario}; 
        }
        // adicione o case addTipo
        case "ADD_TIPOUSUARIO": {
            return {tipoUsuario: action.payload, tokens: state.tokens, names: state.names};
        }

        default:
            return state
    }
}