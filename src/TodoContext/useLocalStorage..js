import React from "react";

function useLocalStorage(itemName, initialValue) { // hook, debe iniciar con use seguido del nombre que decidamos
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) { //agregar la primera tarea
                    localStorage.setItem(itemName, JSON.stringify(initialValue));// transformar el objeto a string 
                    parsedItem = initialValue; //array vacio
                } else {
                    parsedItem = JSON.parse(localStorageItem); // por si ya tiene tareas guardadas
                }

                setItem(parsedItem);
                setLoading(false);
            } catch (err) {
                setError(error);
            }
        }, 1000);
    });

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem); // convertir en string los todos
            localStorage.setItem(itemName, stringifiedItem);// guardarlos en la variable
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    }; // asegurarse de guardar el estado, para que no cambie al recargar el navegadItem

    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage }