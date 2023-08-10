public abstract class Usuario {
    private int id;
    private String nome;
    private String telefone;

    public Usuario(int idu, String nomeu, String telefoneu) {
        id = idu;
        nome = nomeu;
        telefone = telefoneu;
    }

    public abstract void CreateTarefa();
    public abstract void ReadTarefa();
    public abstract void UpdateTarefa();
    public abstract void DeleteTarefa();
}
