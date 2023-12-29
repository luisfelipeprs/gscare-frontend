import Swal from 'sweetalert2'; // Certifique-se de importar o Swal conforme necessário.
// import Authenticator from '../authenticators/custom';

interface AuthenticationProps {
  email: string;
  password: string;
  token: string;
}

export function authenticateUser({ email, password, token }: AuthenticationProps): void {
    // const navigate = useNavigate();
    
    if (!email || !password) {
        Swal.fire({ title: "Entre com o E-mail e a Senha", icon: "warning" });
        document.body.classList.remove('swal2-height-auto');
        document.body.classList.remove('swal2-shown');
    } else if (password && password.length < 8) {
        Swal.fire({ title: "A senha deve ter pelo menos 8 caracteres", icon: "warning" });
        document.body.classList.remove('swal2-height-auto');
        document.body.classList.remove('swal2-shown');
    } else if (!token) {
        Swal.fire({ title: "O Token da conta é obrigatório", icon: "warning" });
        document.body.classList.remove('swal2-height-auto');
        document.body.classList.remove('swal2-shown');
    } else {
        // Aqui você pode chamar a função de autenticação com os parâmetros necessários
        // const authenticator = new Authenticator();
        // authenticator.authenticate({
        // token_admin: token.trim(),
        // email: email.trim(),
        // password: password.trim()
        // }).then(() => {
        // // this.set('token', null);
        // // this.set('email', null);
        // // this.set('password', null);
        // window.location.href = "/whatsapp"
        // // navigate("/whatsapp");
        // });
    }
}
