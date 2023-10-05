import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;

public class Post {
    private int id;
    private String texto;
    private Autor autor;
    private LocalDateTime data;
    private int quantidadeDeLikes;
    private String filePath; // Caminho do arquivo - responsabilidade extra

    public Post(int id, String texto, Autor autor, String filePath) {
        this.id = id;
        this.texto = texto;
        this.autor = autor;
        this.data = LocalDateTime.now();
        this.quantidadeDeLikes = 0;
        this.filePath = filePath;
    }

    public int getId() {
        return id;
    }

    public String getTexto() {

        return texto;
    }

    public Autor getAutor() {
        return autor;
    }

    public LocalDateTime getData() {
        return data;
    }

    public int getQuantidadeDeLikes() {
        return quantidadeDeLikes;
    }

    public void saveToFile() {
        try (FileWriter writer = new FileWriter(filePath)) {
            writer.write("ID: " + id + "\n");
            writer.write("Texto: " + texto + "\n");
            writer.write("Autor: " + autor.getNome() + "\n");
            writer.write("Data: " + data + "\n");
            writer.write("Quantidade de Likes: " + quantidadeDeLikes + "\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}