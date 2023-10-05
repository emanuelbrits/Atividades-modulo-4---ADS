import java.io.FileWriter;
import java.io.IOException;

public class RepositorioDePosts {
    String arquivo = "./RepositorioDePosts.txt";

    public void saveToFile(Post post) {

        try (FileWriter writer = new FileWriter(arquivo, true)) {
            writer.write("ID: " + post.getId() + "\n");
            writer.write("Texto: " + post.getTexto() + "\n");
            writer.write("Autor: " + post.getAutor().getNome() + "\n");
            writer.write("Data: " + post.getData() + "\n");
            writer.write("Quantidade de Likes: " + post.getQuantidadeDeLikes() + ";\n");
            writer.write("\n");
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
