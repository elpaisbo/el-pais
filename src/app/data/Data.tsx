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
        text: "Diario El País",
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
        id: "fechaNacimiento",
        label: "Fecha de Nacimiento",
        type: "birthdate",
        validations: {
            required: "La fecha de nacimiento es requerida",
            validate: {
                validDate: (value: any) => {
                    if (!value || !value.dia || !value.mes || !value.año) {
                        return "Debe seleccionar día, mes y año";
                    }
                    
                    const dia = parseInt(value.dia);
                    const mes = parseInt(value.mes);
                    const año = parseInt(value.año);
                    
                    // Verificar que la fecha sea válida
                    const fecha = new Date(año, mes - 1, dia);
                    if (fecha.getFullYear() !== año || 
                        fecha.getMonth() !== mes - 1 || 
                        fecha.getDate() !== dia) {
                        return "La fecha seleccionada no es válida";
                    }
                    
                    // Verificar que no sea una fecha futura
                    const hoy = new Date();
                    if (fecha > hoy) {
                        return "La fecha de nacimiento no puede ser futura";
                    }
                    
                    return true;
                }
            }
        },
        options: {
            meses: [
                { value: 1, label: "Enero" },
                { value: 2, label: "Febrero" },
                { value: 3, label: "Marzo" },
                { value: 4, label: "Abril" },
                { value: 5, label: "Mayo" },
                { value: 6, label: "Junio" },
                { value: 7, label: "Julio" },
                { value: 8, label: "Agosto" },
                { value: 9, label: "Septiembre" },
                { value: 10, label: "Octubre" },
                { value: 11, label: "Noviembre" },
                { value: 12, label: "Diciembre" }
            ],
            getDiasValidosPorMes: (mes: number, año: number) => {
                if (!mes || !año) return 31;
                
                const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                
                // Verificar año bisiesto para febrero
                if (mes === 2) {
                    const esBisiesto = (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
                    return esBisiesto ? 29 : 28;
                }
                
                return diasPorMes[mes - 1];
            }
        }
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
        text: "Acta de Junta Ordinaria de Accionistas sobre la gestión 2023",
        to: "https://drive.google.com/file/d/1KjT_I4tsoMsTkZZkWc7EOW7L4Ww4AulA/view?usp=sharing",
    },
    {
        id: 6,
        text: "Informe de Auditoría 2023",
        to: "https://drive.google.com/file/d/1VKoejnlVc-PtE-9VTtdebAqQ9xoQUPSQ/view?usp=sharing"
    },
    {
        id: 7,
        text: "Informe de Sindicatura 2023",
        to: "https://drive.google.com/file/d/1PJmi_oYVHMB27E3AcjqZOblFP64sAswR/view?usp=sharing"
    },
    {
        id: 8,
        text: "Informe de Directorio 2023",
        to: "https://drive.google.com/file/d/1t5uslASo8kooQ62AmyJMfFk7cNHA9Qjw/view?usp=sharing"
    },
    {
        id: 9,
        text: "EEFF 2023",
        to: "https://drive.google.com/file/d/1xNtcw-jvYS3OrxQ0EhQ8eJDvotvRGuZN/view?usp=sharing"
    },
    {
        id: 10,
        text: "Memoria anual 2023",
        to: "https://drive.google.com/file/d/1zwaJFqpGAXv3tdtzaOBI6pmeljRKcNZS/view?usp=sharing"
    },
    {
        id: 11,
        text: "Acta de Junta Ordinaria de Accionistas sobre la gestión 2024",
        to: "https://drive.google.com/file/d/16VFrmq0OVmDOy9KV_OjyuRDNPk3f71yY/view?usp=sharing",
    },
    {
        id: 12,
        text: "Informe de Auditoría 2024",
        to: "https://drive.google.com/file/d/1cp-aED2Hy2mqV0yIWbgzfGWZlTY9yaRW/view?usp=sharing"
    },
    {
        id: 13,
        text: "Informe de Sindicatura 2024",
        to: "https://drive.google.com/file/d/1atZ2xlWhkUXFz67ms7JgVelRx2krFm35/view?usp=sharing"
    },
    {
        id: 14,
        text: "Informe de Directorio 2024",
        to: "https://drive.google.com/file/d/1oPzCFn8x4qQn3QLNPY-gLi6qYDS34G7m/view?usp=sharing"
    },
    {
        id: 15,
        text: "EEFF 2024",
        to: "https://drive.google.com/file/d/1NZMfi1R4o6OwRO1HuMEEcMc22-Lpuub0/view?usp=sharing"
    },
    {
        id: 16,
        text: "Memoria anual 2024",
        to: "https://drive.google.com/file/d/1DW3dy7jeaamH8BDms16-KSkElQEH1kQY/view?usp=sharing"
    }
];
