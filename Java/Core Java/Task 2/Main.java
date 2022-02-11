package com.projects;

public class Main {

    public static void main(String[] args) {
        Encapsulation obj1 = new Encapsulation();
        obj1.setEmpName("Mario");
        obj1.setEmpAge(32);
        obj1.setEmpSSN(112233);
        System.out.println("Employee Name: " + obj1.getEmpName());
        System.out.println("Employee SSN: " + obj1.getEmpSSN());
        System.out.println("Employee Age: " + obj1.getEmpAge());
    }
}
