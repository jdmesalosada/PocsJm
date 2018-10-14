package matchers;

import model.User;
import org.hamcrest.Description;
import org.hamcrest.Matcher;
import org.hamcrest.TypeSafeMatcher;

import java.util.Comparator;

public class IsResponse {

    public static Matcher<User> isEqual(final User expectedUser) {
        return new TypeSafeMatcher<User>() {
            @Override
            protected boolean matchesSafely(User actualUser) {
                return isEquivalent(actualUser, expectedUser);
            }

            public void describeTo(Description description) {
                {
                    description.appendText(expectedUser.toString());
                }
            }

        };
    }

    private static boolean isEquivalent(User actualUser, User expectedUser) {
        return Comparator.comparing(User::getName)
                .thenComparing(User::getLastName)
                .compare(actualUser, expectedUser) == 0;
    }

}
