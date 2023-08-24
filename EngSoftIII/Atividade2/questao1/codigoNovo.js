function main(){

    const idade = 19
    const fc_atual = 70

    frequencia_cardiaca(idade, fc_atual)
}

function frequencia_cardiaca(idade, fc_atual){
    let fc_max = 220 - idade

    let zona_atual = ''

    if(fc_atual < 50) {
        throw new console.error('Zona muito baixa');
    }

    if(fc_atual >= 50 && fc_atual < 60) {
        zona_atual = 'Atividade moderada'
    }

    if(fc_atual >= 60 && fc_atual < 70) {
        zona_atual = 'Controle de peso'
    }

    if(fc_atual >= 70 && fc_atual < 80) {
        zona_atual = 'Aeróbica'
    }

    if(fc_atual >= 80 && fc_atual < 90) {
        zona_atual = 'Anaeróbica'
    }

    if(fc_atual >= 90 && fc_atual <= 100) {
        zona_atual = 'Esforço máximo'
    }

    console.log(`${zona_atual} \nAtividade moderada até ${fc_max * 60 / 100}\nControle de peso até ${fc_max * 70 / 100}\nAeróbica até ${fc_max * 80 / 100}\nAnaeróbica até ${fc_max * 90 / 100}\nEsforço máximo até ${fc_max * 100 / 100}`)
}

main()