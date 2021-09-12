import Swal from 'sweetalert2';

export const notifyError = (text, title = `Error`, okay = 'Okay') => {
    return Swal.fire({
        title,
        text,
        icon: 'error',
        confirmButtonText: okay
    })
}

export const showConfirm = (title, text, okay = `Confirm`) => {
    return Swal.fire({
        title,
        text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: okay
    })
}

export const notifySuccess = (title) => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title,
        showConfirmButton: false,
        timer: 1500
    })
}