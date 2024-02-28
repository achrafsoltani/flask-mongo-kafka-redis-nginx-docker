package ma.bcp.architecture.NoficiationsAPI.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @GetMapping("/")
    public String index(){
        return "Hello Spring !";
    }

}
