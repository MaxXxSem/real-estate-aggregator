import { toast } from 'react-toastify';

export function errorHandler(error) {
    var data = error.response.data;
    for (var i = 0; i < data.errors.length; i++) {
        toast.error(data.errors[i].message);
    }
};
