package questao2;

public class RedeSocial {
    public static void main(String[] args) {
        Post p = new Post(1, "Oi", Status.DRAFT);

        p.publish();
    }
}
