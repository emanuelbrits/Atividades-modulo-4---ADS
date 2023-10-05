package questao3;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class ImpostoDeRenda {
    private String cpfContribuinte;
    private double[] rendimentos;
    private double[] despesas;
    private double ImpostoDeRenda;

    public String getCpfContribuinte() {
        return cpfContribuinte;
    }

    public double[] getDespesas() {
        return despesas;
    }

    public double[] getRendimentos() {
        return rendimentos;
    }

    public double getImpostoDeRenda() {
        return ImpostoDeRenda;
    }

    public ImpostoDeRenda(String cpfContribuinte, double[] rendimentos, double[] despesas) {
        if(cpfContribuinte.trim().length() <= 0) {
            throw new IllegalArgumentException("CPF vazio");
        }

        if(cpfContribuinte.length() != 11) {
            throw new IllegalArgumentException("CPF precisa ter 11 caracteres");
        }

        if(Arrays.stream(rendimentos).sum() < 0) {
            throw new IllegalArgumentException("Rendimentos não podem ser negativos");
        }
        
        if(Arrays.stream(despesas).sum() < 0) {
            throw new IllegalArgumentException("Despesas não podem ser negativss");
        }

        if(rendimentos.length > 5) {
            throw new IllegalArgumentException("Só podem haver no máximo 5 rendimentos");
        }
        this.cpfContribuinte = cpfContribuinte;
        this.rendimentos = rendimentos;
        this.despesas = despesas;
    }

    public void processar() {
        CalculadoraImpostoDeRenda calculadora = new CalculadoraImpostoDeRenda();
        String impostoDevido = calculadora.calcular(rendimentos, despesas);

        RelatorioImpostoRenda relatorio = new RelatorioImpostoRenda();
        relatorio.gerarRelatorio(this, impostoDevido);
    }

    public static void main(String[] args) {

    double[] listaRendimentos = {10000};
    double[] listaDespesas = {2000};

    ImpostoDeRenda ir = new ImpostoDeRenda("08203682375", listaRendimentos, listaDespesas);

    ir.processar();
    }
}