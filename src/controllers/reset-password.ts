import Swal from 'sweetalert2';
// import http from '../http/methods';

export async function password(email: string): Promise<void> {
  if (!/\S+@\S+\.\S+/.test(email)) {
    Swal.fire({ title: 'E-mail inválido', icon: 'warning' });
    document.body.classList.remove('swal2-height-auto');
    document.body.classList.remove('swal2-shown');
  } else {
    try {
      // const response = await http.post('password', { email: email.trim() });
      // Swal.fire({ title: response.message, icon: 'success' });
      document.body.classList.remove('swal2-height-auto');
      document.body.classList.remove('swal2-shown');
      
      setTimeout(async () => {
        window.location.href = "/login-admin"
      }, 5000);
      //   navigate('login-admin');
    } catch (err: any) {
      Swal.fire({ title: err.responseJSON.message, icon: 'error' });
      document.body.classList.remove('swal2-height-auto');
      document.body.classList.remove('swal2-shown');
    }
  }
}
