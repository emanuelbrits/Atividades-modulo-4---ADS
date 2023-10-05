package questao3;

import java.util.Arrays;

public class RelatorioImpostoRenda {
    public void gerarRelatorio(ImpostoDeRenda ir, String impostoDevido) {

        System.out.println("CPF: " + ir.getCpfContribuinte());
        System.out.println("Rendimentos: " + Arrays.stream(ir.getRendimentos()).sum());
        System.out.println("Despesas: " + Arrays.stream(ir.getDespesas()).sum());
        System.out.println("Imposto Devido: " + impostoDevido);
    }
}
