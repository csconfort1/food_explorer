import Swal from 'sweetalert2';
import theme from '../../styles/theme';

export async function alertRestrictedArea() {
  const userChoice = await Swal.fire({
    title: 'Você precisa estar logado!',
    text: 'Deseja se logar agora?',
    icon: 'warning',
    background: theme.COLORS.BLUE_200,
    color: theme.COLORS.LIGHT_100,

    showCancelButton: true,
    cancelButtonColor: theme.COLORS.RED_100,
    cancelButtonText: 'Talvez mais tarde.',
    confirmButtonColor: '#ffffff33',
    confirmButtonText: 'Sim, logar agora!',
  });

  return userChoice.isConfirmed;
}

export async function confirmLogout() {
  const userChoice = await Swal.fire({
    title: 'Deseja sair?',
    icon: 'question',
    background: theme.COLORS.BLUE_200,
    color: theme.COLORS.WHITE,
    showCancelButton: true,
    cancelButtonColor: theme.COLORS.RED_100,
    cancelButtonText: 'Não!',
    confirmButtonColor: '#ffffff33',
    confirmButtonText: 'Sim!',
  });

  return userChoice.isConfirmed;
}