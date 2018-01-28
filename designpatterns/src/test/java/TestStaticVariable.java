import org.junit.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class TestStaticVariable {

    @Test
    public void checkStaticVariableValueBetweenInstances() {
        StaticVariable staticVaribleInstance = new StaticVariable();

        //the initial value is pepito.
        StaticVariable.getName();

        //This method update the static variable and set Hola value.
        staticVaribleInstance.setLastName("Hola");
        assertThat(StaticVariable.getName(), equalTo("Hola"));

        //We create a new instance.
        StaticVariable staticVaribleInstance2 = new StaticVariable();
        /*Using the new instance we get the
        *value of the name. We should get the same value "Hola".
         */
        assertThat(staticVaribleInstance2.getName(), equalTo("Hola"));
        staticVaribleInstance2.setLastName("Hola 2");

        //we get the name variable using the first instance, and its value should be "Hola2",
        //This value was set using the staticVaribleInstance2
        assertThat(staticVaribleInstance.getName(), equalTo("Hola 2"));

    }
}
