public class App {
    public static void main(String[] args) {
        RepositorioDePosts repo = new RepositorioDePosts();

        Autor autor = new Autor(1, "Emanuel", "emanuel@gmail.com");

        Post post1 = new Post(1, "Oi", autor, null);
        Post post2 = new Post(2, "Ola", autor, null);

        repo.saveToFile(post1);
        repo.saveToFile(post2);
    }
}