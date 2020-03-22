// jQuery(document).ready(function($) {
        $('#submit').hide();

        let d = new Date();    
        // date.setDate(date.getDate() + 1);
        let month = '' + (d.getMonth() + 1);
        if( month < 10 ) month = '0'+month
        
        let day = '' + (d.getDate()+1);
        let dia = '' + d.getDate();
        if( day < 10 ) day = '0' + day
        
        let year = d.getFullYear();
        
        let f_comp = [year, month, day].join('-')
        
        let f_hoy = [dia, month, year].join('-')
        $('.fecha').val(f_comp)
        // $('.fecha').val([day, month, year].join('/'))
        // console.log([year, month, day].join('-'));

        // });
        let cliente, fecha, hora, doctor, cosulta = ''
        if (cosulta == null) {
            $('#submit').hide();
        }

        $('#cliente').change(function(event) {
            cliente = $('#cliente').val()
        })

        $('#fecha').change(function(event) {
            fecha = $('#fecha').val()
            if (fecha < f_comp) {
                Swal.fire(
                  'Error en la fecha',
                  'La fecha tiene que ser mayor a '+f_hoy,
                  'error'
                )
            }
        })

        $('#hora').change(function(event) {
            hora = $('#hora').val()
        })

        $('#doctor').change(function(event) {
            doctor = $('#doctor').val()
        })

        $('#consulta').change(function(event) {
            consulta = $('#consulta').val()
            if (cliente == null && fecha == null && hora == null && doctor == null && consulta == null) {
                console.log('sin')
            }else {
                console.log('completos')
                $('#submit').show();
                // $('#submit').attr('hide', false);
            }
        })



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
