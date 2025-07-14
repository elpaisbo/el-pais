export function transformFormToDatabase(registerData: Register): RegisterDB {
    const { fechaNacimiento, idCompra, ...rest } = registerData;
    
    const fecha_nacimiento = `${fechaNacimiento.año}-${fechaNacimiento.mes.padStart(2, '0')}-${fechaNacimiento.dia.padStart(2, '0')}`;
    
    return {
        ...rest,
        id_compra: idCompra,
        fecha_nacimiento
    };
}

export function transformDatabaseToForm(dbData: RegisterDB): Register {
    const { fecha_nacimiento, id_compra, ...rest } = dbData;
    
    const [año, mes, dia] = fecha_nacimiento.split('-');
    
    return {
        ...rest,
        idCompra: id_compra,
        fechaNacimiento: {
            dia: dia.replace(/^0/, ''),
            mes: mes.replace(/^0/, ''),
            año
        }
    };
}

export function validateFechaNacimiento(fechaNacimiento: { dia: string; mes: string; año: string }): boolean {
    const { dia, mes, año } = fechaNacimiento;
    
    if (!dia || !mes || !año) return false;
    
    const diaNum = parseInt(dia);
    const mesNum = parseInt(mes);
    const añoNum = parseInt(año);
    
    if (diaNum < 1 || diaNum > 31) return false;
    if (mesNum < 1 || mesNum > 12) return false;
    if (añoNum < 1900 || añoNum > new Date().getFullYear()) return false;
    
    const fecha = new Date(añoNum, mesNum - 1, diaNum);
    return fecha.getFullYear() === añoNum && 
           fecha.getMonth() === mesNum - 1 && 
           fecha.getDate() === diaNum;
}
