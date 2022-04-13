import { Subject } from 'rxjs';
import { Usuario } from './usuario.model';
import { LoginData } from './login-data.model';
import { UsuarioComponent } from '../usuario.component';

export class SeguridadService {
  seguridadCambio = new Subject<boolean>();
  private usuario?: Usuario;

  registrarUsuario(usr: Usuario) {
    this.usuario = {
      email: usr.email,
      usuarioId: Math.round(Math.random() * 1000).toString(),
      nombre: usr.nombre,
      apellidos: usr.apellidos,
      username: usr.username,
      password: '',
    };
    this.seguridadCambio.next(true);
  }

  login(loginData: LoginData) {
    this.usuario = {
      email: loginData.email,
      usuarioId: Math.round(Math.random() * 1000).toString(),
      nombre: '',
      apellidos: '',
      username: '',
      password: '',
    };
    this.seguridadCambio.next(true);
  }

  salirSesion() {
    this.usuario = null;
    this.seguridadCambio.next(false);
  }

  obtenerUsuario() {
    return { ...this.usuario };
  }
}
