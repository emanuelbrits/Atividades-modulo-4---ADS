function main(){

    const idade = 19
    const fc_atual = 70

    frequencia_cardiaca(idade, fc_atual)
}

function frequencia_cardiaca(idade, fc_atual){
    let fc_max = 220 - idade

    let zona_atual = ''

    if(fc_atual > 50 && fc_atual < 60){
        zona_atual = 'Atividade moderada'
    }else if(fc_atual < 70){
        zona_atual = 'Controle de peso'
    }else if(fc_atual < 80){
        zona_atual = 'Aeróbica'
    }else if(fc_atual < 90){
        zona_atual = 'Anaeróbica'
    }else if(fc_atual <= 100){
        zona_atual = 'Esforço máximo'
    }

    console.log(zona_atual)

    console.log(`Atividade moderada até ${fc_max * 60 / 100}`)
    console.log(`Controle de peso até ${fc_max * 70 / 100}`)
    console.log(`Aeróbica até ${fc_max * 80 / 100}`)
    console.log(`Anaeróbica até ${fc_max * 90 / 100}`)
    console.log(`Esforço máximo até ${fc_max * 100 / 100}`)
}

main()