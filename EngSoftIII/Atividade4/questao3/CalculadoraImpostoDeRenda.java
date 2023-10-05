package questao3;

import java.text.DecimalFormat;
import java.util.Arrays;

public class CalculadoraImpostoDeRenda {
    public String calcular(double[] rendimentos, double[] despesas) {

        DecimalFormat formato = new DecimalFormat("#." + "0".repeat(2));

        double rendaTotal = Arrays.stream(rendimentos).sum();
        double despesaTotal = Arrays.stream(despesas).sum();
        double baseCalculo = rendaTotal - despesaTotal;
        if (baseCalculo <= 1903.98) {
            return "0.00";
        }
        if (baseCalculo <= 2826.65) {
            return formato.format(baseCalculo * 0.075 - 142.80);
        }
        return formato.format(baseCalculo * 0.275 - 869.36);
    }
}
