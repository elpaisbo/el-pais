import Banner1 from "../../../public/images/banners/banner1.jpg";
import Banner2 from "../../../public/images/banners/banner2.jpg";
// import Obsesiones from "../../../public/documents/obsesiones.pdf";

export const bannersInicio = [
    {
        id: 1,
        img: Banner1,
        alt: "Banner precio acciones",
        to: "#form",
    },
    {
        id: 2,
        img: Banner2,
        alt: "Banner rentabilidad",
        to: "/actividades",
    },
];

export const navLinks = [
    {
        text: "Inicio",
        to: "/",
    },
    {
        text: "Derechos de los Accionistas",
        to: "/derechos",
    },
    {
        text: "Actividades de la Empresa",
        to: "/actividades",
    },
];

export const formInputs = [
    {
        id: "nombre",
        label: "Nombre",
        validations: {
            required: "El nombre es requerido",
            minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres",
            },
        },
    },
    {
        id: "apellido",
        label: "Apellido",
        validations: {
            required: "El apellido es requerido",
            minLength: {
                value: 3,
                message: "El apellido debe tener al menos 3 caracteres",
            },
        },
    },
    {
        id: "email",
        label: "Email",
        validations: {
            required: "El email es requerido",
            pattern: {
                value: /\S+@\S+\.\S+/,
                message: "El email no es válido",
            },
        },
    },
    {
        id: "telefono",
        label: "Teléfono",
        validations: {
            required: "El teléfono es requerido",
            pattern: {
                value: /^[+]?[0-9]+$/,
                message: "El teléfono no es válido",
            },
        },
    },
    {
        id: "domicilio",
        label: "Domicilio",
        validations: {
            required: "El domicilio es requerido",
            minLength: {
                value: 3,
                message: "El domicilio debe tener al menos 3 caracteres",
            },
        },
    },
    {
        id: "nacionalidad",
        label: "Nacionalidad",
        validations: {
            required: "La nacionalidad es requerida",
            minLength: {
                value: 3,
                message: "La nacionalidad debe tener al menos 3 caracteres",
            },
        },
    },
    {
        id: "ci",
        label: "Cédula de Identidad",
        validations: {
            required: "La cédula de identidad es requerida",
            minLength: {
                value: 3,
                message:
                    "La cédula de identidad debe tener al menos 3 caracteres",
            },
        },
    },
];

export const pdfData = [
    {
        id: 1,
        text: "Las Obsesiones de El País",
        to: "https://drive.google.com/file/d/1uG_2qJYxEIS-ACidg3zn-w7h0ljJkQtd/view?usp=share_link",
    },
    {
        id: 2,
        text: "Estatutos El País",
        to: "https://drive.google.com/file/d/1c_viqs9p42m3Sxv69ksP0renMtRi8HsK/view?usp=share_link",
    },
    {
        id: 3,
        text: "Conformación Sociedad Anónima",
        to: "https://drive.google.com/file/d/1cHqbA2X1V0OQg_uSUohGM5sLW-vyYTnY/view?usp=sharing",
    },
    {
        id: 4,
        text: "Folleto Venta de Acciones",
        to: "https://drive.google.com/file/d/1U1X8ODIKYC3z5NVgboUqnnEHdTStLJJI/view?usp=sharing",
    },
    {
        id: 5,
        text: "EEFF 31/12/2022",
        to: "https://drive.google.com/file/d/1hiaoM_zqlbTDqXjU_2McXx7Ab_fkvj2S/view?usp=share_link",
    },
];
