import Banner7 from "../../../public/images/banners/banner7.jpg";
import Banner8 from "../../../public/images/banners/banner8.jpg";
import Banner6 from "../../../public/images/banners/banner6.jpg";
// import Obsesiones from "../../../public/documents/obsesiones.pdf";

export const bannersInicio = [
    {
        id: 1,
        img: Banner7,
        alt: "Banner precio acciones",
        to: "#form",
        width: 1700,
        height: 800,
    },
    {
        id: 2,
        img: Banner8,
        alt: "Banner Monedas",
        to: "#form",
        width: 1700,
        height: 800,
    },
    {
        id: 2,
        img: Banner6,
        alt: "Banner rentabilidad",
        to: "/actividades",
        width: 500,
        height: 800,
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
    {
        text: "Periódico El País",
        to: "https://elpais.bo/",
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
        to: "https://drive.google.com/file/d/1bOeAzrBdUsPeJR8Hoif2--oLFZnvdzA1/view?usp=sharing",
    },
    {
        id: 2,
        text: "Folleto de Acciones Zona Creativa El Pais S.A.",
        to: "https://drive.google.com/file/d/1j4aIAYeLnJelTmyJXepvXNXEOhT2sIEZ/view?usp=sharing",
    },
    {
        id: 3,
        text: "Testimonio de Conformación ZCEP S.A.",
        to: "https://drive.google.com/file/d/12xqQ6mwa0kUw3M2ZWXPuojKYvehQ9zBo/view?usp=sharing",
    },
    {
        id: 4,
        text: "Estatutos Zona Creativa El País S.A.",
        to: "https://drive.google.com/file/d/1dKEbnS4j6A6-00jP_PbJ4Bh42vzGohGr/view?usp=sharing",
    },
    {
        id: 5,
        text: "Acta de Junta Ordinaria de Accionistas sobre la gestión 2022",
        to: "https://drive.google.com/file/d/17mcdzROi871WtRk1QgW7KgW5wdjbC6d9/view?usp=sharing",
    },
    {
        id: 6,
        text: "Informe de Auditoría 2022",
        to: "https://drive.google.com/file/d/1izGrd9A_mfS23G0QRYM-1PjX4nEphawG/view?usp=sharing"
    },
    {
        id: 7,
        text: "Informe de Sindicatura 2022",
        to: "https://drive.google.com/file/d/1uqTyAtirMGk_Lm2Y2GxeHf8a3nksmhcs/view?usp=sharing"
    },
    {
        id: 8,
        text: "Informe de Directorio 2022",
        to: "https://drive.google.com/file/d/11M-zbTNH9G_SMwbru3_XWUoh8oW0v8Z4/view?usp=sharing"
    },
    {
        id: 9,
        text: "EEFF 2022",
        to: "https://drive.google.com/file/d/1Z3eqBCpWJ3E4nEjjMIp5VYfGqbpacuvL/view?usp=sharing"
    },
    {
        id: 10,
        text: "Memoria Anual 2022",
        to: "https://drive.google.com/file/d/1C1Y0uPoa12wwXFCRKq2hJSqKyE-TjRil/view?usp=sharing"
    },
    {
        id: 11,
        text: "Acta de Junta Ordinaria de Accionistas sobre la gestión 2023",
        to: "https://drive.google.com/file/d/1KjT_I4tsoMsTkZZkWc7EOW7L4Ww4AulA/view?usp=sharing",
    },
    {
        id: 12,
        text: "Informe de Auditoría 2023",
        to: "https://drive.google.com/file/d/1VKoejnlVc-PtE-9VTtdebAqQ9xoQUPSQ/view?usp=sharing"
    },
    {
        id: 13,
        text: "Informe de Sindicatura 2023",
        to: "https://drive.google.com/file/d/1PJmi_oYVHMB27E3AcjqZOblFP64sAswR/view?usp=sharing"
    },
    {
        id: 14,
        text: "Informe de Directorio 2023",
        to: "https://drive.google.com/file/d/1t5uslASo8kooQ62AmyJMfFk7cNHA9Qjw/view?usp=sharing"
    },
    {
        id: 15,
        text: "EEFF 2023",
        to: "https://drive.google.com/file/d/1xNtcw-jvYS3OrxQ0EhQ8eJDvotvRGuZN/view?usp=sharing"
    },
    {
        id: 16,
        text: "Memoria anual 2023",
        to: "https://drive.google.com/file/d/1zwaJFqpGAXv3tdtzaOBI6pmeljRKcNZS/view?usp=sharing"
    }
];
