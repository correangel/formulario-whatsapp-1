document.querySelector('#submit').addEventListener('click',function(){
//vars    
    let cliente = document.querySelector('#cliente').value;
    let fecha = document.querySelector('#fecha').value;
    let hora = document.querySelector('#hora').value;
    let doctor = document.querySelector('#doctor').value;
    let consulta = document.querySelector('#consulta').value;

    let url = "https://api.whatsapp.com/send?phone=543794345079&text=*_Consultas Medicas_*%0A*Reservas*%0A%0A*¿Cual es tu nombre?*%0A" + cliente + "%0A*Indica la fecha de tu reserva*%0A" + fecha + "%0A*Indica la hora de tu reserva*%0A" + hora + "%0A*Doctor de preferencia*%0A" + doctor + "%0A*¿Cual es consulta que se desea realizar?*%0A" + consulta;
    window.open(url);

});
