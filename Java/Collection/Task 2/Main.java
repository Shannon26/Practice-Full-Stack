package com.projects;

import java.util.*;

public class Main {

    public static void main(String[] args) {
        SortedSet<String> eliminatedDups2 = new TreeSet<String>(IGNORE_CASE);

        eliminatedDups2.add("Banana");
        eliminatedDups2.add("Apple");
        eliminatedDups2.add("Pineapple");
        eliminatedDups2.add("Orange");
        eliminatedDups2.add("orange");

        for (String a : args) {
            eliminatedDups2.add(a);
        }
        System.out.println(eliminatedDups2.size() + " distinct words by ignoring case: " + eliminatedDups2);
    }

    static final Comparator<String> IGNORE_CASE = new Comparator<String>() {
        public int compare(String s1, String s2) {
            return s1.compareToIgnoreCase(s2);
        }
    };
}
