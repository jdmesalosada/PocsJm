package matchers;

import model.User;
import org.hamcrest.Description;
import org.hamcrest.Matcher;
import org.hamcrest.TypeSafeMatcher;

import java.util.Comparator;

public class IsResponse2 extends TypeSafeMatcher<User> {

    User expectedUser;

    public IsResponse2(User expectedUser) {
        this.expectedUser = expectedUser;
    }

    public static Matcher<User> isEqual(User expectedUser) {
        return new IsResponse2(expectedUser);
    }

    protected boolean matchesSafely(User actualUser) {
        return isEquivalent(this.expectedUser, actualUser);
    }

    public void describeTo(Description description) {
        description.appendText(expectedUser.toString());
    }


    private static boolean isEquivalent(User actualUser, User expectedUser) {
        return Comparator.comparing(User::getName)
                .thenComparing(User::getLastName)
                .compare(actualUser, expectedUser) == 0;
    }

}
