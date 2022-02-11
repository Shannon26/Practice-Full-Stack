package com.projects;

import java.util.*;

public class Main {

    public static void main(String[] args) {
        String a[] = new String[] { "A", "B", "C", "D", "E", "F", "G" };
        // Get and shuffle the list of arguments
        List<String> argList = Arrays.asList(a);
        Collections.shuffle(argList);

        // Print out the elements using JDK 8 Streams
        argList.stream().forEach(e->System.out.format("%s ",e));

        System.out.println();

        // Print out the elements using for-each
        for (String arg: argList) {
            System.out.format("%s ", arg);
        }

        System.out.println();
    }
}
