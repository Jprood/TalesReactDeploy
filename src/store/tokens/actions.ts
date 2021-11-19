export type Action = {type: "ADD_TOKEN"|"ADD_NAME"|"ADD_TIPOUSUARIO"; payload: string};

export const addToken = (token: string): Action =>({
    type: "ADD_TOKEN",
    payload: token,
});

export const addName = (nome: string): Action =>({
    type: "ADD_NAME",
    payload: nome,
});

export const addTipoUsuario = (tipoUsuario: string): Action =>({
    type: "ADD_TIPOUSUARIO",
    payload: tipoUsuario,
});