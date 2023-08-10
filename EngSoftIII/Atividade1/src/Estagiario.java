class Estagiario extends Usuario{
    

    public Estagiario(int idu, String nomeu, String telefoneu) {
        super(idu, nomeu, telefoneu);
    }

    public void CreateTarefa() {
        System.out.println("Estagiários não podem criar tarefas");
    };

    public void ReadTarefa() {

    };

    public void UpdateTarefa() {

    };

    public void DeleteTarefa() {
        System.out.println("Estagiários não podem deletar tarefas");
    };
}
