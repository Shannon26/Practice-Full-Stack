package com.projects;

public abstract class Wrestler {

    public void paymentForWork (int hours) {
        System.out.println("The wrestler will make $"+(hours*250.00));
    }
    public abstract void themeMusic();
    public abstract void finisher();
}
