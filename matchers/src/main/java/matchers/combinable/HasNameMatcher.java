package matchers.combinable;

import model.User;
import org.hamcrest.Description;
import org.hamcrest.Matcher;
import org.hamcrest.TypeSafeMatcher;

public class HasNameMatcher {

    public static Matcher<User> equal(final User expectedUser) {
        return new TypeSafeMatcher<User>() {
            @Override
            protected boolean matchesSafely(User actualUser) {
                return actualUser.getName().equals(expectedUser.getName());
            }

            public void describeTo(Description description) {
                {
                    description.appendText("Name should be: " + expectedUser.getName());
                }
            }

            public void describeMismatchSafely(final User actualUser, final Description mismatchDescription) {
                mismatchDescription.appendText(" was ").appendValue(actualUser.getName());
            }

        };
    }
}
