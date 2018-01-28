public class StaticVariable {

    private static String name = "pepito";

    private String lastName;

    public static String getName() {
        return name;
    }

    public static void setName(String name) {
        StaticVariable.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
        //change the name variable in the instance.
        name = lastName;
    }
}