import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Tarefa {
    private int id;
    private String nome;
    private String descricao;
    private Date prazo;
    private boolean status;

    public Tarefa(int idt, String nomet, String descricaot, String prazot) throws ParseException {
        SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");

        id = idt;
        nome = nomet;
        descricao = descricaot;
        prazo = formato.parse(prazot);
        status = false;
    }

    public int GetId() {
        return id;
    }

    public String GetNome() {
        return nome;
    }

    public String GetDescricao() {
        return descricao;
    }

    public Date GetPrazo() {
        return prazo;
    }

    public boolean GetStatus() {
        return status;
    }

    public void AlterarStatus() {
        if(status == false) {
            status = true;
        } else {
            status = false;
        }
    }
}
