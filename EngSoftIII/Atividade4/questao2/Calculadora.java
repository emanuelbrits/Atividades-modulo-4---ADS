package questao2;

import java.util.ArrayList;
import java.util.List;

public class Calculadora implements	interfaceCalculadora {
    private final double a;
    private final double b;

    public Calculadora(double a, double b) {
        this.a = a;
        this.b = b;
    }

    public List<Double> calcular(List<String> operacoes) {
        List<Double> resultados = new ArrayList<>();
        for (String operacao : operacoes) {
            switch (operacao) {
                case "soma":
                    resultados.add(this.a + this.b);
                    break;
                case "subtracao":
                    resultados.add(this.a - this.b);
                    break;
                // case "multiplicacao":
                // resultados.add(this.a * this.b);
                // break;
                default:
                    throw new IllegalArgumentException("Operação não suportada: " + operacao);
            }
        }
        return resultados;
    }
}
