package com.projects;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        Multi t1 = new Multi();
        t1.setName("fetchData");

        Multi2 m1 = new Multi2();
        Thread t2 = new Thread(m1, "processData");

        t1.start();
        t1.join();
        t2.start();
    }
}
