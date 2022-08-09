interface UsuarioLogin {
    nome: string;
    email: string;
    senha: string;
    token?: string | null;
}

export default UsuarioLogin;