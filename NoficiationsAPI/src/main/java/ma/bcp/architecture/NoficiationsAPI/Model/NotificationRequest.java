package ma.bcp.architecture.NoficiationsAPI.Model;

public class NotificationRequest {

    public NotificationRequest(String title, String body, String topic, String token){
        this.title = title;
        this.body = body;
        this.topic = topic;
        this.token = token;
    }

    private String title;
    private String body;
    private String topic;
    private String token;

    public void setTitle(String title){
        this.title = title;
    }

    public void setBody(String body){
        this.body = body;
    }

    public void setTopic(String topic){
        this.topic = topic;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getTitle(){
        return this.title;
    }

    public String getBody(){
        return this.body;
    }

    public String getTopic(){
        return this.topic;
    }

    public String getToken() {
        //return "dLbbbRxoTOy_idRudhcJPr:APA91bHVO58NguU8fCdD_9FTTeEabQ4xMina5Ry8QAGeWsnOTN7aZMetfEgpqgRNix22UfZ31O15lfp6K3WKkAA24LGSbnImkJ-VT5J_cQ4Z4tn9g0aKZkaSHGKu63eFRoBl9BljRG0q";
        return this.token;
    }
}
