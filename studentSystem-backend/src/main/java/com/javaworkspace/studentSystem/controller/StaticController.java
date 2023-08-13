package com.javaworkspace.studentSystem.controller;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/")
@CrossOrigin
public class StaticController {

    @GetMapping("/.well-known/acme-challenge/76BaGoLCuEJRXBZRTGhXlkW1b7BcBWOSc9-oCZHP5hY")
    public ResponseEntity<Resource> getAcmeChallenge() {
        ByteArrayResource resource= new ByteArrayResource("76BaGoLCuEJRXBZRTGhXlkW1b7BcBWOSc9-oCZHP5hY.X8eLx_C-lm-CgbIhuUSoJTBYo4F4FjlSNvCq6zrxceA".getBytes());
        return ResponseEntity.ok()
                .body(resource);
    }
}
