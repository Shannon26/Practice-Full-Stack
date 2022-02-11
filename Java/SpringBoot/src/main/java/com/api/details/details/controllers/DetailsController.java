package com.api.details.details.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Dictionary;
import java.util.Hashtable;

@Controller
public class DetailsController {

    @RequestMapping(value = "/details")
    @ResponseBody
    public Dictionary getDetails(){
        Dictionary det1 = new Hashtable();
        det1.put("Name", "Shannon Dmello");
        det1.put("Company", "Quantiphi");
        det1.put("Position", "Software Developer");
        return det1;
    }
}
