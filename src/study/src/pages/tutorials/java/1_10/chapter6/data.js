export const JavaTutorialChapter6Data = {
    one: `public class MyProgramHandler extends ToolBase {
    protected File dir;
    protected int port;

    // getters for dir and port
    ...
    public MyProgramHandler() {
        this.registerHandler(new ArgHandlerDir() {
            @Override
            public void setDir(File dir) {
                this.dir = dir;
            }
        });
    
        this.registerHandler(new ArgHandlerInt() {
            @Override
            public String[] getTagArgs() {
                return new String[]{"port"};
            }

            @Override
            public void setInt(int value) {
                this.port = value;
            }
        });
    }

    public static void main(String[] args) {
        MyProgramHandler myShell = new MyProgramHandler();
        if (myShell.processArgs(args)) {
            // main program operation
            System.out.println(String.format("port: %d; dir: %s",
            myShell.getPort(), myShell.getDir()));
        }
        
        System.exit(1);
    }
}`,

    two: `public class Main {
    public static void main(String[] args) {
        if (args.length > 0) {
            System.err.println("usage: myapp");
            System.exit(1);
        }
        
        // Run the application
        System.out.println("It worked");
    }
}`,

    three: `public class Main {
    public static void main(String[] args) {
        if (args.length != 2) {
            System.err.println("usage: myapp <arg1> <arg2>");
            System.exit(1);
        }
        
        // Run the application
        System.out.println("It worked: " + args[0] + ", " + args[1]);
    }
}`,

    four: ``,

    five: ``,

    six: ``,

    seven: ``,

    eight: ``,

    nine: ``,

    ten: ``,

    elevent: ``, 

    twelve: ``,

    thirteen: ``,

    fourteen: ``
}