// test-registro.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testRegistro() {
  console.log('🔄 Probando conexión a la base de datos...');
  
  try {
    // 1. Verificar conexión
    await prisma.$connect();
    console.log('✅ Conexión exitosa');

    // 2. Contar registros existentes
    const count = await prisma.registro.count();
    console.log(`📊 Registros existentes: ${count}`);

    // 3. Crear nuevo registro de prueba
    const nuevoRegistro = await prisma.registro.create({
      data: {
        nombre: 'Juan Carlos',
        apellido: 'Pérez López',
        nacionalidad: 'Boliviana',
        domicilio: 'Av. América #123, Tarija',
        idcompra: 'COMP-' + Date.now(),
        acciones: 10,
        email: 'juan.perez@email.com',
        telefono: '+591 71234567',
        ci: '1234567 TJA',
        fecha_nacimiento: new Date('1990-05-15')
      }
    });
    
    console.log('✅ Registro creado exitosamente:');
    console.log({
      id: nuevoRegistro.id,
      nombre: nuevoRegistro.nombre,
      apellido: nuevoRegistro.apellido,
      email: nuevoRegistro.email,
      idcompra: nuevoRegistro.idcompra
    });

    // 4. Verificar que se guardó correctamente
    const registroVerificado = await prisma.registro.findUnique({
      where: { idcompra: nuevoRegistro.idcompra }
    });

    if (registroVerificado) {
      console.log('✅ Verificación exitosa - El registro se guardó correctamente');
    }

  } catch (error) {
    console.error('❌ Error durante la prueba:');
    console.error('Tipo:', error.constructor.name);
    console.error('Mensaje:', error.message);
    
    if (error.code) {
      console.error('Código de error:', error.code);
    }
  } finally {
    await prisma.$disconnect();
    console.log('🔌 Conexión cerrada');
  }
}

// Ejecutar la prueba
testRegistro();
