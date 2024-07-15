//package Cine_server.example.Cine_server.controller;
//
//import Cine_server.example.Cine_server.model.SocialMediaLink;
//import Cine_server.example.Cine_server.service.SocialMediaLinkService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/social-media-links")
//public class SocialMediaLinkController {
//    @Autowired
//    private SocialMediaLinkService socialMediaLinkService;
//
//    @PostMapping
//    public SocialMediaLink addSocialMediaLink(@RequestBody SocialMediaLink socialMediaLink) {
//        return socialMediaLinkService.saveSocialMediaLink(socialMediaLink);
//    }
//
//    // Add more endpoints for CRUD operations on social media links
//}
