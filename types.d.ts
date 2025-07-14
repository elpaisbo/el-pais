type Register = {
    nombre: string;
    apellido: string;
    nacionalidad: string;
    domicilio: string;
    idCompra: string;
    acciones: number;
    email: string;
    telefono: string;
    ci: string;
    fechaNacimiento: {
        dia: string;
        mes: string;
        año: string;
    };
};

type RegisterDB = {
    nombre: string;
    apellido: string;
    nacionalidad: string;
    domicilio: string;
    id_compra: string;
    acciones: number;
    email: string;
    telefono: string;
    ci: string;
    fecha_nacimiento: string;
};
