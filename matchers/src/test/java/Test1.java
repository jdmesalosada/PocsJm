import matchers.IsResponse;
import matchers.IsResponse2;
import matchers.combinable.ExpectedUserMatcher;
import matchers.combinable.HasLastNameMatcher;
import matchers.combinable.HasNameMatcher;
import model.User;
import model.User2;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import static matchers.combinable.MyCombinableMatcher.all;
import static org.hamcrest.MatcherAssert.assertThat;

public class Test1 {

    User actualUser = new User();
    User expectedUser = new User();

    @BeforeTest
    public void setup() {

        actualUser.setName("Julian1");
        actualUser.setLastName("Mesa");

        expectedUser.setName("Julian");
        expectedUser.setLastName("Mesa2");
    }


    @Test
    public void isResponseTest() {

        User2 user2 = new User2();
        /*
        assertThat(user2, IsResponse.equal(expectedUser));
        * This is wrong due the typesafematchers expects a User type doesn't User2.
        * */
        //First parameter the actual, second parameter is the matcher.
        assertThat(actualUser, IsResponse.isEqual(expectedUser));
    }


    @Test
    public void isResponse2Test() {
        //Fist the actual, second the matcher(expected)
        assertThat(actualUser, IsResponse2.isEqual(expectedUser));
    }


    @Test
    public void combinableTest() {
        //Fist the actual, second the matcher(expected)
        assertThat(actualUser, all(HasNameMatcher.equal(expectedUser))
                .and(HasLastNameMatcher.equal(expectedUser)));
    }

    @Test
    public void expectedUserMatcherTest() {
        //Fist the actual, second the matcher(expected)
        assertThat(actualUser, all(ExpectedUserMatcher.hasName(expectedUser))
                .and(ExpectedUserMatcher.hasLastName(expectedUser)));
    }

}
