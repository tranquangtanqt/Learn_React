export const JavaTutorialChapter4Data = {
    one: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello world!");
    }
}`,

    two: `$ javac HelloWorld.java`,

    three: `$ java HelloWorld
Hello world!`,

    four: `package com.example;
    public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello world!");
    }
}`,

    five: `. # the current directory (for this example)
|
 ----com
    |
    ----example
        |
        ----HelloWorld.java`,

    six: `$ javac com/example/HelloWorld.java`,

    seven: `. # the current directory (for this example)
|
----com
    |
    ----example
        |
        ----HelloWorld.java
        ----HelloWorld.class`,

    eight: `$ java com.example.HelloWorld
Hello world!`,

    nine: `$ javac Foo.java Bar.java`,

    ten: `$ javac *.java
$ javac com/example/*.java
$ javac */**/*.java #Only works on Zsh or with globstar enabled on your shell`,

    elevent: `$ javac @sourcefiles`, 

    twelve: `Foo.java
Bar.java
com/example/HelloWorld.java`,

    thirteen: `public class OldSyntax {
    private static int enum; // invalid in Java 5 or later
}`,

    fourteen: `$ javac -source 1.4 OldSyntax.java`,

    fifteen: `$ javac -target 1.4 SomeClass.java`,

    sixteen: `$ javac -target 1.4 --bootclasspath path/to/java1.4/rt.jar SomeClass.java`,
}