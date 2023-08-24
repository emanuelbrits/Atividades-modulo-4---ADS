package questao2;
enum Status {
    DRAFT,
    PUBLISHED,
    DELETED
}

public class Post {
    private int id;
    private String text;
    private Status status;

    Post(int id, String text, Status status) {
        this.setId(id);
        this.setText(text);
        this.setStatus(status);
    }

    public void publish() {

        if(!validate()) {
            throw new RuntimeException("Post inválido");
        } else {
            setStatus(Status.PUBLISHED);
            System.out.println("Post publicado");
        }
    }

	public String getText() {
		return text;
	}


	public void setText(String text) {
		this.text = text;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

    public boolean validate() {
        if (status == Status.DRAFT) {
            if (text.trim().length() > 0) {
                return true;
            }
        }
        
        return false;
    }
    
}