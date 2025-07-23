const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testConnection() {
  try {
    console.log('🔍 Probando conexión con la base de datos...');
    
    // Verificar conexión
    await prisma.$connect();
    console.log('✅ Conexión exitosa con la base de datos');
    
    // Obtener información de la base de datos
    const result = await prisma.$queryRaw`SELECT version()`;
    console.log('📊 Versión de PostgreSQL:', result[0].version);
    
    // Probar una consulta simple (ajusta según tus modelos)
    // Ejemplo: contar registros de una tabla
    try {
      // Reemplaza 'User' con el nombre de uno de tus modelos
      const count = await prisma.user.count();
      console.log('👥 Total de usuarios en la DB:', count);
    } catch (modelError) {
      console.log('ℹ️  No se pudo consultar la tabla User (normal si no existe)');
    }
    
    console.log('🎉 Todas las pruebas pasaron correctamente');
    
  } catch (error) {
    console.error('❌ Error en la conexión:', error.message);
    
    if (error.code) {
      console.error('📝 Código de error:', error.code);
    }
    
    if (error.code === 'P1001') {
      console.error('💡 Sugerencia: Verifica que las variables de entorno estén configuradas correctamente');
    }
    
  } finally {
    await prisma.$disconnect();
    console.log('🔌 Conexión cerrada');
  }
}

// Verificar variables de entorno
console.log('🔧 Verificando variables de entorno...');
console.log('POSTGRES_URL:', process.env.POSTGRES_URL ? '✅ Configurada' : '❌ No encontrada');
console.log('POSTGRES_URL_NON_POOLING:', process.env.POSTGRES_URL_NON_POOLING ? '✅ Configurada' : '❌ No encontrada');
console.log('POSTGRES_SHADOW_URL:', process.env.POSTGRES_SHADOW_URL ? '✅ Configurada' : '❌ No encontrada');
console.log('');

// Ejecutar test
testConnection();
