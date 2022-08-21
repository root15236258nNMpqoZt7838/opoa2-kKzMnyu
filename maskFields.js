export function maskField(props) {
    let type = props.type;
    let field = props.field;
    let value = props.value;
    
    //Mask Money Fields
    if (type == 'currency') {
        value = value.replace('.', '').replace(/\D/g, '');
        let result = value;
        if (value.length == 6) {
            result = value.substring(0, 3) + '.' + value.substring(3)
        }
        if (value.length == 5) {
            result = value.substring(0, 2) + '.' + value.substring(2)
        }
        if (value.length == 4) {
            result = value.substring(0, 1) + '.' + value.substring(1)
        }
        document.getElementById(field).value = 'R$ '+result
    }

    if (type == 'phone') {
        value = value.replace('(', '').replace(')', '').replace(' ', '').replace('-', '').replace(/\D/g, '');
        if (value.length == 1) {
            console.log('Length= a 1')
            document.getElementById(field).value = '(' + value
            return
        }
        if (value.length == 2) {
            console.log('length = a 2')
            document.getElementById(field).value = '(' + value + ')'
            return
        }
        if (value.length > 7) {
        console.log('length > que 7')
            document.getElementById(field).value = '(' + value.substring(0,2) + ') ' + value.substring(2, 7) + '-' + value.substring(7)
            return
        }
        if (value.length > 2) {
        console.log('length > que 2')
            document.getElementById(field).value = '(' + value.substring(0,2) + ') ' + value.substring(2,7)
            return
        }
    }

    if (type == 'cpf') {
        value = value.replace('.', '').replace('-', '').replace(/\D/g, '');

        if (value.length >= 3 && value.length < 6) {
            document.getElementById(field).value = value.substring(0, 3) + '.' + value.substring(3);
            return
        }
        if (value.length >=6 && value.length < 9) {
            document.getElementById(field).value = value.substring(0, 3) + '.' + value.substring(3, 6) + '.' + value.substring(6);
            return
        }
        if (value.length > 9) {
            document.getElementById(field).value = value.substring(0, 3) + '.' + value.substring(3,6) + '.' + value.substring(6,9) + '-' + value.substring(9,11);
            return
        }
        
        
    }


}
