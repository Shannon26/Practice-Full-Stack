package com.projects;

public class Multi extends Thread{
    public void run(){
        System.out.println("Thread-1 Running");
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            System.out.println(e);
        }
        System.out.println("Thread-1 Ended");
    }
}
