import React from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';

interface MesOption {
    value: number;
    label: string;
}

interface BirthdateOptions {
    meses: MesOption[];
    getDiasValidosPorMes: (mes: number | null, año: number | null) => number;
}

interface BirthdateInputProps {
    id: string;
    label: string;
    validations: any;
    options: any;
}

const BirthdateInput: React.FC<BirthdateInputProps> = ({ id, label, validations, options }) => {
    const { register, watch, setValue, formState: { errors } } = useFormContext();
    
    const watchedValue = watch(id) || {};
    
    const handleChange = (tipo: string, nuevoValor: string) => {
        const nuevaFecha = {
            ...watchedValue,
            [tipo]: nuevoValor
        };
        
        if (tipo === 'mes' || tipo === 'año') {
            const diasValidos = options.getDiasValidosPorMes(
                tipo === 'mes' ? parseInt(nuevoValor) : parseInt(watchedValue.mes),
                tipo === 'año' ? parseInt(nuevoValor) : parseInt(watchedValue.año)
            );
            
            if (watchedValue.dia && parseInt(watchedValue.dia) > diasValidos) {
                nuevaFecha.dia = diasValidos.toString();
            }
        }
        
        setValue(id, nuevaFecha);
    };

    const diasDisponibles = options.getDiasValidosPorMes(
        watchedValue.mes ? parseInt(watchedValue.mes) : null,
        watchedValue.año ? parseInt(watchedValue.año) : null
    );

    const añoActual = new Date().getFullYear();
    const años = Array.from({ length: añoActual - 1900 + 1 }, (_, i) => añoActual - i);

    React.useEffect(() => {
        register(id, validations);
    }, [id, register, validations]);

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id}>{label}</label>
            <div className="flex gap-2">
                <select
                    className="border border-black rounded-sm p-1 outline-1 flex-1"
                    value={watchedValue.dia || ''}
                    onChange={(e) => handleChange('dia', e.target.value)}
                >
                    <option value="">Día</option>
                    {Array.from({ length: diasDisponibles }, (_, i) => i + 1).map(dia => (
                        <option key={dia} value={dia}>{dia}</option>
                    ))}
                </select>
                
                <select
                    className="border border-black rounded-sm p-1 outline-1 flex-1"
                    value={watchedValue.mes || ''}
                    onChange={(e) => handleChange('mes', e.target.value)}
                >
                    <option value="">Mes</option>
                    {options.meses.map((mes: MesOption) => (
                        <option key={mes.value} value={mes.value}>{mes.label}</option>
                    ))}
                </select>
                
                <select
                    className="border border-black rounded-sm p-1 outline-1 flex-1"
                    value={watchedValue.año || ''}
                    onChange={(e) => handleChange('año', e.target.value)}
                >
                    <option value="">Año</option>
                    {años.map(año => (
                        <option key={año} value={año}>{año}</option>
                    ))}
                </select>
            </div>
            <ErrorMessage errors={errors[id]} />
        </div>
    );
};

export default BirthdateInput;
