import Swal from 'sweetalert2'; // Certifique-se de importar o Swal conforme necessário.
// import http from '../http/methods';

interface SignupData {
  name: string;
  email: string;
  email2: string;
  phone: string;
  password: string;
  password2: string;
}

export function signup ({ email, email2, phone, password, password2 }: SignupData): void {

  if (!/\S+@\S+\.\S+/.test(email)) {
    Swal.fire({ title: 'E-mail inválido', icon: 'warning' });
    document.body.classList.remove('swal2-height-auto');
    document.body.classList.remove('swal2-shown');
  } else if (email.trim() !== email2.trim()) {
    Swal.fire({ title: 'Os emails não conferem', icon: 'warning' });
    document.body.classList.remove('swal2-height-auto');
    document.body.classList.remove('swal2-shown');
  } else if (phone.trim().length < 10) {
    Swal.fire({
      title: 'Número do WhatsApp inválido. Digite o número com DDD e DDI',
      icon: 'warning',
    });
    document.body.classList.remove('swal2-height-auto');
    document.body.classList.remove('swal2-shown');
  } else if (password.length < 8) {
    Swal.fire({ title: 'A senha deve ter pelo menos 8 caracteres', icon: 'warning' });
    document.body.classList.remove('swal2-height-auto');
    document.body.classList.remove('swal2-shown');
  } else if (password.trim() !== password2.trim()) {
    Swal.fire({ title: 'As senhas não conferem', icon: 'warning' });
    document.body.classList.remove('swal2-height-auto');
    document.body.classList.remove('swal2-shown');
  } else {
    // http
    //   .post('signup', {
    //     name: name.trim(),
    //     email: email.trim(),
    //     email2: email2.trim(),
    //     phone: phone.trim(),
    //     password: password.trim(),
    //     password2: password2.trim(),
    //   })
    //   .then((res) => {
    //     Swal.fire({ title: 'Sua conta foi criada com sucesso!', icon: 'success' });
    //     document.body.classList.remove('swal2-height-auto');
    //     document.body.classList.remove('swal2-shown');

    //     setTimeout(async () => {
    //         window.location.href = "/login-admin"
    //     }, 2000);
    //     // navigate('login-admin');
    //   })
    //   .catch((err) => {
    //     Swal.fire({ title: err.responseJSON.message, icon: 'error' });
    //     document.body.classList.remove('swal2-height-auto');
    //     document.body.classList.remove('swal2-shown');
    //   });
  }
}
