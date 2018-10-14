import matchers.IsResponse2;
import model.User;
import model.User2;

import static org.hamcrest.MatcherAssert.assertThat;

public class Test1 {


    public static void main(String args[]) {

        User actualUser = new User();
        actualUser.setName("Julian");
        actualUser.setLastName("Mesa");

        User expectedUser = new User();
        expectedUser.setName("Julian");
        expectedUser.setLastName("Mesa2");

        User2 user2 = new User2();
        //assertThat(user2, IsResponse.isEqual(expectedUser)); // This is wrong due the typesafematchers expects a User type doesn't User2.

        //assertThat(actualUser, IsResponse.isEqual(expectedUser));

        //Fist the actual, second the matcher(expected)
        assertThat(actualUser, IsResponse2.isEqual(expectedUser));

    }

}
