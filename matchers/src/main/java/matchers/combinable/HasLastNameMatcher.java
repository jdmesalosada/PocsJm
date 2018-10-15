package matchers.combinable;

import model.User;
import org.hamcrest.Description;
import org.hamcrest.Matcher;
import org.hamcrest.TypeSafeMatcher;

public class HasLastNameMatcher {

    public static Matcher<User> equal(final User expectedUser) {
        return new TypeSafeMatcher<User>() {
            @Override
            protected boolean matchesSafely(User actualUser) {
                return actualUser.getLastName().equals(expectedUser.getLastName());
            }

            public void describeTo(Description description) {
                {
                    description.appendText("Last name should be: " + expectedUser.getLastName());
                }
            }

            public void describeMismatchSafely(final User actualUser, final Description mismatchDescription) {
                mismatchDescription.appendText(" was ").appendValue(actualUser.getLastName());
            }

        };
    }

}
