export const JavaTutorialChapter2Data = {
    one: `public class Person {
    private String name;
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        if(name!=null && name.length()>2)
        this.name = name;
    } 
}`,

    two: `public String getName(){
    if(name.length()>16)
        return "Name is too large!";
    else
        return name;
}`,

    three: `public class CountHolder {
    private int count = 0;

    public int getCount() { return count; }
    public void setCount(int c) { count = c; }
}`,

    four: `public class CountHolder {
    public int count = 0;
}`,

    five: `public class CountHolder {
    private int count = 0;

    public synchronized int getCount() { return count; }
    public synchronized void setCount(int c) { count = c; }
}`,

    six: `public class Sample {
    private String name;
    private int age;
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public String getName() {
        return name;
    }  
    public void setName(String name) {
        this.name = name;
    }
}`,

    seven: `getVariableName() //Getter, The variable name should start with uppercase
setVariableName(..) //Setter, The variable name should start with uppercase`,

    eight: `isVariableName() //Getter, The variable name should start with uppercase
setVariableName(...) //Setter, The variable name should start with uppercase`,

}