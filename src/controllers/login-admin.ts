import Swal from 'sweetalert2'; // Certifique-se de importar o Swal conforme necessário.
// import Authenticator from '../authenticators/custom';

interface AuthenticationProps {
  email: string;
  password: string;
}

interface dataAuth {
  hasAuth: boolean
  data: object
}

export function authenticateAdmin({ email, password }: AuthenticationProps): dataAuth {

  const dataAuth = {
    hasAuth: false,
    data: {}
  }
  
  if (!email || !password) {
    Swal.fire({ title: 'Entre com o E-mail e a Senha', icon: 'warning' });
    document.body.classList.remove('swal2-height-auto');
    document.body.classList.remove('swal2-shown');
  } else if (password.length < 8) {
    Swal.fire({ title: 'A senha deve ter pelo menos 8 caracteres', icon: 'warning' });
    document.body.classList.remove('swal2-height-auto');
    document.body.classList.remove('swal2-shown');
  } else {
    // const authenticator = new Authenticator();
    // authenticator.authenticate({
    //   token_admin: '',
    //   email: email.trim(),
    //   password: password.trim(),
    // }).then((data) => {
    //     dataAuth.hasAuth = true
    //     dataAuth.data = data
    //     // console.log("account: ", account)
    //     // window.location.href = "/app"
    // //   navigate('/app');
    // });
  }

  return dataAuth
}
