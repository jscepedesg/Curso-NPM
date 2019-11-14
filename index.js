module.exports= 
{
    hola: function()
    {
        console.log('Hola Mundo!!');
    },
    /**
     * @example
     * Hola Juan
     * @param {*} nombre 
     */
    holaPersonalizado: function(nombre)
    {
        console.log(`Hola ${ nombre }`);
    },
    holaAlCursoNPM: function()
    {
        console.log('Hola al curso NPM');
    }
}