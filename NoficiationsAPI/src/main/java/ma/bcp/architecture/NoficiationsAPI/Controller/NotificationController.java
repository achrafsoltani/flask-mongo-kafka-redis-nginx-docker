package ma.bcp.architecture.NoficiationsAPI.Controller;

import ma.bcp.architecture.NoficiationsAPI.Model.NotificationRequest;
import ma.bcp.architecture.NoficiationsAPI.Model.NotificationResponse;
import ma.bcp.architecture.NoficiationsAPI.Service.FCMService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ExecutionException;

@RestController
public class NotificationController {

    @Autowired
    private FCMService fcmService;

    @PostMapping("/notification")
    public ResponseEntity sendNotification(@RequestBody NotificationRequest request) throws ExecutionException, InterruptedException{
        fcmService.sendMessageToToken(request);
        return new ResponseEntity<>(new NotificationResponse(HttpStatus.OK.value(), "Notification has been sent."), HttpStatus.OK);
    }
}

